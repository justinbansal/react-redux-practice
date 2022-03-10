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
      const {name, quantity} = action.payload;
      const existingProduct = state.cartItems.find(product => product.name === name);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    }
  }
})


export const { addProduct } = quantitySlice.actions;
export default quantitySlice.reducer;
