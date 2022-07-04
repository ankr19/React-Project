import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState(null);
  const [alert, setAlert] = useState({ alert: "", message: "" });
  let allNote = async () => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmNjOWZiYjBlMzBiYzViZjRiZWQyNiIsImlhdCI6MTY0NzQ1MzM0OX0.ckTTen-s2gPn1agT_0QfMTs4J6DAdYbCSgpKUO9gUsc",
      },
    });
    const initialnotes = await response.json();
    setNotes(initialnotes);
  };

  let addNote = (note) => {
    // todo api call
    console.log("Adding a new note");
    setNotes(notes.concat(note));
    console.log(
      "title:" + note.title + " desc:" + note.desc + " tag:" + note.tag
    );
    setAlert({ alert: "success", message: "Success Adding" });
  };

  const deleteNote = (id) => {
    //todo api call
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
    setAlert({ alert: "warning", message: "Deleted a Note" });
  };

  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, alert }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
