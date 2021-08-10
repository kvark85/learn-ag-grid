import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchVehicles, fetchOneVehicle } from '../resources/vehicleAPI';

const initialState = {
  vehicles: [],
  status: 'idle',
};

export const fetchData = createAsyncThunk(
  'vehicles/fetchVehicles',
  async () => {
    const ids = (await fetchVehicles()).search_result?.ids;

    return await Promise.all(ids.map((id) => fetchOneVehicle(id)));
  }
);

export const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.vehicles = action.payload;
      });
  },
});

export const vehicleDataTable = (state) => state.vehicle.vehicles.map((vehicle) => ({
  markName: vehicle.markName,
  title: vehicle.title,
  USD: vehicle.USD,
  regionName: vehicle.stateData.regionName,
  cityLocative: vehicle.cityLocative,
  travelRoute: []
}));

export default vehicleSlice.reducer;

