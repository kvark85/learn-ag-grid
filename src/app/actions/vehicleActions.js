export const MARKS_FETCH_REQUESTED = 'MARKS_FETCH_REQUESTED';
export const MARKS_FETCH_SUCCEEDED = 'MARKS_FETCH_SUCCEEDED';
export const VEHICLES_FETCH_REQUESTED = 'VEHICLES_FETCH_REQUESTED';
export const VEHICLES_FETCH_SUCCEEDED = 'VEHICLES_FETCH_SUCCEEDED';

export const fetchMarks = () => ({ type: MARKS_FETCH_REQUESTED });

export const fetchVehicles = (selectedMarks) => ({
  type: VEHICLES_FETCH_REQUESTED,
  payload: { selectedMarks }
});
