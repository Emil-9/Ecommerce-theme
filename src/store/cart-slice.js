import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  cartItems: [],
};

// create the slice with reducers
const cartSlice = createSlice({
  name: "shopingCart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      console.log("adding to cart ");
      const findCartIndex = state.cartItems.findIndex(
        (e) => +e.id === +action.payload.cartItem.id
      );

      console.log(findCartIndex);
      if (findCartIndex === -1) {
        state.cartItems.push({ ...action.payload.cartItem, total: 1 });
      } else {
        state.cartItems[findCartIndex] = {
          ...action.payload.cartItem,
          total: state.cartItems[findCartIndex].total + 1,
        };
      }
    },

    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (elem) => elem.id !== action.payload.id
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
