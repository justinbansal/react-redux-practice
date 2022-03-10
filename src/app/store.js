import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import quantityReducer from '../features/product/quantitySlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    quantity: quantityReducer,
  }
})
