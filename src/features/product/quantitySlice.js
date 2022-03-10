import { createSlice } from '@reduxjs/toolkit';

export const quantitySlice = createSlice({
  name: 'quantity',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    }
  }
})


export const { increment } = quantitySlice.actions;
export default quantitySlice.reducer;
