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
    addItem(state, action) {
      const findIndex = state.items.findIndex(
        (e) => +e.id === +action.payload.item.id
      );
      if (findIndex === -1) {
        state.items.push(action.payload.item);
      } else {
        return;
      }
    },

    removeItem(state, action) {
      state.items = state.items.filter((elem) => elem.id !== action.payload.id);
    },
  },
});

export const favActions = favSlice.actions; // export actions type as methods

export default favSlice.reducer;
