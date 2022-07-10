import React from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  // const [alert, setAlert] = useState({ alert: "", message: "" });

  let allNote = async () => {
    const response = await fetch(
      "http://localhost:5000/api/notes/fetchallnotes",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      }
    );
    const initialnotes = await response.json();
    setNotes(initialnotes);
    
  };

  let addNote = async (title, description, tag) => {
    // todo api call
    const response = await fetch("http://localhost:5000/api/notes/addingnote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    setNotes(notes.concat(json));
    props.showAlert("added the note successfully","success");
    // setAlert({ alert: "success", message: "Success Adding" });
  };

  const deleteNote = async (id) => {
    //todo api call
    const response = await fetch(
      `http://localhost:5000/api/notes/deletenote/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      }
    );
    const json = response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
    props.showAlert("deleted the note successfully","secondary");
    // setAlert({ alert: "warning", message: "Deleted a Note" });
  };

  const editNote = async (id, title, description, tag) => {
    // api calling
    const response = await fetch(
      `http://localhost:5000/api/notes/updatenote/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, tag }),
      }
    );

    const json = response.json();
    let newNote = JSON.parse(JSON.stringify(notes));
    // logic to edit
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setNotes(newNote);
    props.showAlert("updated the note successfully","success");
  };

  return (
    <NoteContext.Provider
      value={{ notes, allNote, addNote, editNote, deleteNote}}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
