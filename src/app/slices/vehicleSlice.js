import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchVehicles } from '../resources/vehicleAPI';

const initialState = {
  vehiclesIds: [],
  allResponse: {},
  status: 'idle',
};

export const fetchData = createAsyncThunk(
  'vehicles/fetchVehicles',
  async () => await fetchVehicles()
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.allResponse = action.payload;
        state.vehiclesIds = action.payload.search_result?.ids;
      });
  },
});

export default counterSlice.reducer;
