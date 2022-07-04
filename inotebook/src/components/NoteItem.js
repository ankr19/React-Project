import React from "react";
import { useContext } from "react";
import NoteContext from "../auth/NoteContext";

const NoteItem = (props) => {
  let { note } = props;
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  return (
    <div className="col-md-3 rounded">
      <div className="card border-dark">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <button className="btn btn-outline-secondary mx-2" type="button" onClick={()=>{deleteNote(note._id)}}><i className="bi bi-trash3-fill"></i></button>
            <button className="btn btn-outline-secondary mx-2" type="button"><i className="bi bi-pencil-square"></i></button>
          </div>
          <p className="card-subtitle mb-2 text-muted">{note.desc}</p>
          <p className="card-subtitle mb-2 text-muted">{note.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
