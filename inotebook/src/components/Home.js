import React, { useEffect } from "react";
import { useContext } from "react";
import NoteContext from "../auth/NoteContext";
import AddNote from "./AddNote";
import Alert from "./Alert";
import NoteItem from "./NoteItem";

const Home = () => {
  const context = useContext(NoteContext);
  
  let { notes } = context;
  
  useEffect(()=>{
    let { alert } = context;
    setInterval((n)=>{setTimeout(n)},3000);
  },[alert]);
  
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
            return <NoteItem note={note} key={key} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
