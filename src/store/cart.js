import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: localStorage.getItem('cart'),
};

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    addToCart: (state, action) => {
      state.value = ~~state.value + ~~action.payload;
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },

});

export const { increment, addToCart } = cart.actions;


export const selectCart = (state) => state.cart.value;


export default cart.reducer;
