import { createSelector } from 'reselect';

const getVehicles = (state) => state.vehicleState.vehicles;

export const getVehiclesTableData = createSelector(
  [getVehicles],
  (vehicles) => {
    return vehicles.map((vehicle) => ({
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
    }))
  }
);
