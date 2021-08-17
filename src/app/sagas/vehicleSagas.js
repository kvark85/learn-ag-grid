import { call, put, takeEvery, all } from 'redux-saga/effects'
import {
  MARKS_FETCH_REQUESTED,
  MARKS_FETCH_SUCCEEDED,
  VEHICLES_FETCH_REQUESTED,
  VEHICLES_FETCH_SUCCEEDED,
  IMAGES_FETCH_REQUESTED,
  IMAGES_FETCH_SUCCEEDED
} from '../actions/vehicleActions';
import api from '../resources/vehicleAPI';
import { CATEGORIES } from '../constants';

function* fetchMarks() {
  const marks = yield call(api.fetchMarks);

  yield put({ type: MARKS_FETCH_SUCCEEDED, payload: marks });
}

function* fetchVehicle(action) {
  const vehicleIds = yield call(api.fetchVehicles, CATEGORIES.MOTORCYCLE, action.payload.selectedMarks);

  if (!vehicleIds) {
    return;
  }

  const vehicles = yield all(vehicleIds.map((id) => call(api.fetchOneVehicle, id)));

  if (!vehicles) {
    return;
  }

  yield put({
    type: VEHICLES_FETCH_SUCCEEDED,
    payload: vehicles.map((vehicle, index) => ({...vehicle, id: vehicleIds[index] })),
  })
}

function* fetchImages(action) {
  const { id, images } = yield call(api.fetchImages, action.payload);

  yield put({ type: IMAGES_FETCH_SUCCEEDED, payload: { id, images } });
}

function* fetchVehiclesSaga() {
  yield takeEvery(MARKS_FETCH_REQUESTED, fetchMarks);
  yield takeEvery(VEHICLES_FETCH_REQUESTED, fetchVehicle);
  yield takeEvery(IMAGES_FETCH_REQUESTED, fetchImages);
}

export default fetchVehiclesSaga;