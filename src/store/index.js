import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./fav-slice";

// create store
const store = configureStore({
  reducer: {
    favouriteReducer: favSlice,
  },
});

export default store;
