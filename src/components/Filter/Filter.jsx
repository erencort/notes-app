import React, { useState } from "react";
import "./style.css";
import { filter } from "../../redux/notes/notesSlice.js";
import { useDispatch } from "react-redux";

function Filter() {
  const dispatch = useDispatch();
  const [filterQuery, setFilterQuery] = useState("");

  const filterHandler = (e) => {
    setFilterQuery(e.target.value);
    dispatch(filter(filterQuery));
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => filterHandler}
      />
    </div>
  );
}

export default Filter;
