import React from 'react'
import { useState } from 'react'
import NoteContext from './NoteContext'

const NoteState = (props) => {
  const initialNote = [
    {
      "_id": "628773d4c442f040345cfccc",
      "user": "622cc9fbb0e30bc5bf4bed26",
      "title": "Adding a note",
      "description": "With reactjs",
      "tag": "Personal",
      "timestamp": "2022-05-20T10:56:20.082Z",
      "__v": 0
    },
    {
      "_id": "62a56f6cbca5ba56fc18521d",
      "user": "622cc9fbb0e30bc5bf4bed26",
      "title": "my title",
      "description": "Please wake up",
      "tag": "personal",
      "timestamp": "2022-06-12T04:45:32.299Z",
      "__v": 0
    },
    {
      "_id": "62a56f83bca5ba56fc185222",
      "user": "622cc9fbb0e30bc5bf4bed26",
      "title": "my title",
      "description": "Please wake up",
      "tag": "personal",
      "timestamp": "2022-06-12T04:45:55.208Z",
      "__v": 0
    },
    {
      "_id": "62a56f84bca5ba56fc185224",
      "user": "622cc9fbb0e30bc5bf4bed26",
      "title": "my title",
      "description": "Please wake up",
      "tag": "personal",
      "timestamp": "2022-06-12T04:45:56.007Z",
      "__v": 0
    },
    {
      "_id": "62b0ae0abc364a77092ca1f4",
      "user": "622cc9fbb0e30bc5bf4bed26",
      "title": "my title",
      "description": "Please wake up",
      "tag": "personal",
      "timestamp": "2022-06-20T17:27:38.694Z",
      "__v": 0
    },
    {
      "_id": "62b0ae15bc364a77092ca1f6",
      "user": "622cc9fbb0e30bc5bf4bed26",
      "title": "my title",
      "description": "Please wake up",
      "tag": "personal",
      "timestamp": "2022-06-20T17:27:49.706Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(initialNote);
    let addNote = (note)=>{
        // todo api call
        console.log("Adding a new note")
        setNotes(notes.concat(note))
        console.log("title:"+note.title+" description:"+note.desc+" tag:"+note.tag)

        

    }

    
  return (
    <NoteContext.Provider value={{addNote}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
