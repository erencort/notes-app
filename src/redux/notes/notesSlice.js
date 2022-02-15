import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    searchQuery: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload];
    },
    setFilter: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export default noteSlice.reducer;
export const { addNote, setFilter } = noteSlice.actions;
