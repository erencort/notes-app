import { useState } from "react";
import { useDispatch } from "react-redux";
import "./style.css";
import { addNote } from "../../redux/notes/notesSlice.js";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

function Textarea() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notesList.notes);
  const [newNote, setNewNote] = useState();
  const [noteColor, setNoteColor] = useState("white");

  const handleAddNewNote = () => {
    dispatch(addNote({ note: newNote, id: nanoid(), noteColor: noteColor }));
    setNewNote("");
    setNoteColor("white");
    console.log(noteColor);
  };

  return (
    <div className="section">
      <div className="textarea-div">
        <textarea
          name="textarea"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        ></textarea>
      </div>
      <div className="colors-button-div">
        <div className="colors">
          <div className="green" onClick={() => setNoteColor("green")}></div>
          <div className="yellow" onClick={() => setNoteColor("yellow")}></div>
          <div className="blue" onClick={() => setNoteColor("aqua")}></div>
          <div className="pink" onClick={() => setNoteColor("pink")}></div>
          <div className="white" onClick={() => setNoteColor("white")}></div>
        </div>
        <button onClick={handleAddNewNote}>Add</button>
      </div>
    </div>
  );
}

export default Textarea;
