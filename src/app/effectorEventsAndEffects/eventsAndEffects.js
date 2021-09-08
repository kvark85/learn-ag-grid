import { createEffect, forward } from 'effector';
import vehicleAPI from '../resources/vehicleAPI';

import { CATEGORIES } from '../constants';

export const fetchMarksFx = createEffect(async () => {
  return await vehicleAPI.fetchMarks(CATEGORIES.MOTORCYCLE);
});

export const fetchVehiclesFx = createEffect(async (selectedMarks) => {
  return vehicleAPI.fetchVehicles(CATEGORIES.MOTORCYCLE, selectedMarks);
});

export const fetchVehiclesByIdsFx = createEffect(async vehicleIds => {
  const vehicles = await Promise.all(vehicleIds.map((id) => vehicleAPI.fetchOneVehicle(id)))

  return vehicles.map((vehicle, index) => ({...vehicle, id: vehicleIds[index] }));
})

forward({
  from: fetchVehiclesFx.done.map(({ result }) => result),
  to: fetchVehiclesByIdsFx,
})

export const fetchImagesFx = createEffect(async (vehicleId) => {
  return await vehicleAPI.fetchImages(vehicleId);
});
