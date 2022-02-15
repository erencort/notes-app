import React from "react";
import { useSelector } from "react-redux";
import "./style.css";

function Notes() {
  const notes = useSelector((state) => state.notesList.notes);
  let searchQuery = useSelector((state) => state.notesList.searchQuery);
  let filterq = searchQuery.toLowerCase();
  let filtered = notes.filter((item) => item.note.includes(filterq));
  return (
    <div>
      {filtered.map((item) => (
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
