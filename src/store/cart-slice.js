import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  cartItems: [],
};

// create the slice with reducers
const cartSlice = createSlice({
  name: "calculate",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const findCartIndex = state.cartItems.findIndex(
        (e) => +e.id === +action.payload.item.id
      );
      if (findCartIndex === -1) {
        state.cartItems.push({ ...action.payload.item, total: 1 });
      } else {
        state.cartItems[findCartIndex] = {
          ...state.cartItems[findCartIndex],
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
