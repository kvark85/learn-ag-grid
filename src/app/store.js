import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './components/counter/counterSlice';
import vehicleReducer from './slices/vehicleSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    vehicle: vehicleReducer,
  },
});
