import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [
      { note: "Note1", id: 1, noteColor: "white" },
      { note: "note2", id: 2, noteColor: "pink" },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes = [...state.notes, action.payload];
    },
    filter: (state, action) => {
      state.notes.filter((item) => item.note === action.payload);
    },
  },
});

export default noteSlice.reducer;
export const { addNote, filter } = noteSlice.actions;
