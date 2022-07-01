import React, { useContext } from "react";
import { useState } from "react";
import NoteContext from "../auth/NoteContext";

const AddNote = () => {
  // adding context
  const context = useContext(NoteContext);
  const [note, setNotes] = useState({ title: "", desc: "", tag: "" });
  // using a login function
  let { addNote } = context;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    addNote(note);
    setNotes({ title: "", desc: "", tag: "" })
  };
  return (
    <>
      <h2>Adding a Note</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="Text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="titleHelp"
            value={note.title}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your Notes with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="Text"
            className="form-control"
            id="desc"
            name="desc"
            value={note.desc}
            onChange={handleChange}
            aria-describedby="descHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="Text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={handleChange}
            aria-describedby="tagHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </>
  );
};

export default AddNote;
