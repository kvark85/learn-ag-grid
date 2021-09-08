import { createStore } from 'effector';
import { fetchVehiclesByIdsFx } from "../effectorEventsAndEffects/eventsAndEffects";

export const $vehicles = createStore([])
  .on(
    fetchVehiclesByIdsFx.doneData,
    (state, vehicles) => vehicles
  );

export const $vehiclesTableData = $vehicles.map(vehicles => {
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
  }));
});
