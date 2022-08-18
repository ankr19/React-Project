const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const Notes = require("../models/Notes");
// const { wait } = require("@testing-library/user-event/dist/utils");
const router = express.Router();

// 1st router of the note model
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.send(notes);
});

// 2nd router of the note to adding the models

router.post(
  "/addingnote",
  fetchuser,
  [
    body("title", "enter a proper title").isLength({ min: 3 }),
    body("description", "enter a proper description").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const { title, description, tag } = req.body;

    // adding the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savenotes = await note.save();
      res.json(savenotes);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server error");
    }
  }
);

// router 3 updating the notes /api/notes/updatenote
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  // create a new note object
  const newNotes = {};
  try {
    if (title) {
      newNotes.title = title;
    }
    if (description) {
      newNotes.description = description;
    }
    if (tag) {
      newNotes.tag = tag;
    }
    // console.log(newNotes)
    // console.log(req.params.id)
    // const note = Notes.findByIdAndUpdate()
    let note = await Notes.findById(req.params.id);
    // checking the id is in the db or not
    if (!note) {
      return res.status(404).send("Not Found");
    }
    // checking the user is in the db or not
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }
    // at last the user can update the database
    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNotes },
      { new: true }
    );

    res.send({ note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server error");
  }
});

// router 4 deleting the notes /api/notes/deletenote
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  // create a new note object

  // const note = Notes.findByIdAnddelete()
  let note = await Notes.findById(req.params.id);
  // checking the id is in the db or not
  if (!note) {
    return res.status(404).send("Not Found");
  }
  // checking the user own this place or not
  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Not allowed");
  }
  // at last the user can update the database
  note = await Notes.findByIdAndDelete(req.params.id);

  res.json({ success: "Note has been deleted", note: note });
});

module.exports = router;
