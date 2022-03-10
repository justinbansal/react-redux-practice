import { createSlice } from '@reduxjs/toolkit';

export const quantitySlice = createSlice({
  name: 'quantity',
  initialState: {
    cartQuantity: 0,
    cartItems: []
  },
  reducers: {
    addProduct: (state, action) => {
      state.cartQuantity += 1;
      state.cartItems.push(action.payload);
    }
  }
})


export const { addProduct } = quantitySlice.actions;
export default quantitySlice.reducer;
