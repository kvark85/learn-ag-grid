import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../resources/vehicleAPI';
import { CATEGORIES } from '../constants'

const initialState = {
  marks: [],
  vehicles: [],
  status: 'idle',
};

export const fetchMarks = createAsyncThunk(
  'vehicles/fetchMarks',
  async () => {
    return await api.fetchMarks(CATEGORIES.MOTORCYCLE);
  }
);

export const fetchVehicles = createAsyncThunk(
  'vehicles/fetchVehicles',
  async (selectedMarks) => {
    const ids = (await api.fetchVehicles(CATEGORIES.MOTORCYCLE, selectedMarks)).search_result?.ids;
    const vehicles = await Promise.all(ids.map((id) => api.fetchOneVehicle(id)))

    return vehicles.map((vehicle, index) => ({...vehicle, id: ids[index] }));
  }
);

export const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMarks.fulfilled, (state, action) => {
        state.status = 'idle';
        state.marks = action.payload;
      })
      .addCase(fetchVehicles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.status = 'idle';
        state.vehicles = action.payload;
      });
  },
});

export const vehicleDataTable = (state) => state.vehicle.vehicles.map((vehicle) => ({
  id: vehicle.id,
  markName: vehicle.markName,
  title: vehicle.title,
  price: {
    USD: vehicle.USD,
    UAH: vehicle.UAH,
  },
  regionName: vehicle.stateData.regionName,
  locationCityName: vehicle.locationCityName,
  travelRoute: []
}));
export const marksSelector = (state) => state.vehicle.marks;
export const statusSelector = (state) => state.vehicle.status;

export default vehicleSlice.reducer;

