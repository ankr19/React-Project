import React, { useEffect, useState, useRef, useContext } from "react";
import NoteContext from "../auth/NoteContext";
import AddNote from "./AddNote";
import Alert from "./Alert";
import NoteItem from "./NoteItem";

const Home = () => {
  const context = useContext(NoteContext);

  const { notes, allNote, alert, editNote } = context;

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  useEffect(() => {
    allNote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
  };

  return (
    <>
      <Alert alert={alert.alert} message={alert.message} />
      <div className="container">
        <AddNote />
      </div>
      <div className="container">
        <h2>Your Notes</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {notes.map((note, key) => {
            return <NoteItem note={note} updateNote={updateNote} key={key} />;
          })}
        </div>
        {/* Model */}

        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="Text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      aria-describedby="titleHelp"
                      value={note.etitle}
                      onChange={handleChange}
                      minLength={5}
                      required
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
                      id="edescription"
                      name="edescription"
                      value={note.edescription}
                      onChange={handleChange}
                      aria-describedby="descHelp"
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="Text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      value={note.etag}
                      onChange={handleChange}
                      aria-describedby="tagHelp"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={refClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClick}
                  disabled={
                    note.etitle.length < 5 || note.edescription.length < 5
                  }
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
