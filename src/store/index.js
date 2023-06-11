import { configureStore } from "@reduxjs/toolkit";
import favSlice from "./fav-slice";
import cartSlice from "./cart-slice";

// create store
const store = configureStore({
  reducer: {
    favouriteReducer: favSlice,
    cartReducer: cartSlice,
  },
});

export default store;
