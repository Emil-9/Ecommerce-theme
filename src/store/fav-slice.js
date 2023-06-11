import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  items: [],
};

// create the slice with reducers
const favSlice = createSlice({
  name: "likedProducts",
  initialState: initialState,
  reducers: {
    addToFav(state, action) {
      const favIndex = state.items.findIndex(
        (e) => +e.id === +action.payload.item.id
      );
      if (favIndex === -1) {
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
