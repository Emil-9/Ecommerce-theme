import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  items: [],
};

// create the slice with reducers
const favSlice = createSlice({
  name: "calculate",
  initialState: initialState,
  reducers: {
    // first reducer -> add a new row with the value of 0
    addItem(state, action) {
      state.items.push(action.payload.item);
    },

    // second reducer -> delete a row depending on the passed row id
    removeItem(state, action) {
      state.items = state.items.filter((elem) => elem.id !== action.payload.id);
    },
  },
});

export const favActions = favSlice.actions; // export actions type as methods

export default favSlice.reducer;
