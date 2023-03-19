import { createSlice } from "@reduxjs/toolkit";

const initailCartState = { counter: 0, cartNumber: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initailCartState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      if (state.counter > 0) {
        state.counter--;
      } else {
        state.counter;
      }
    },
    addToCart(state) {
      return {
        ...state,
        cartNumber: state.cartNumber + state.counter,
      };
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
