import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

function Notes() {
  const notes = useSelector((state) => state.notesList.notes);
  return (
    <div>
      {notes.map((item) => (
        <div
          className="note"
          style={{ backgroundColor: `${item.noteColor}` }}
          key={item.id}
        >
          <p>{item.note}</p>
        </div>
      ))}
    </div>
  );
}

export default Notes;
