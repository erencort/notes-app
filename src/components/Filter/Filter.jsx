import "./style.css";
import { setFilter } from "../../redux/notes/notesSlice.js";
import { useDispatch } from "react-redux";

function Filter() {
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
}

export default Filter;
