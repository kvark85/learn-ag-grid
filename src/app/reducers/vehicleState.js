import {
  MARKS_FETCH_SUCCEEDED,
  VEHICLES_FETCH_REQUESTED,
  VEHICLES_FETCH_SUCCEEDED,
  IMAGES_FETCH_SUCCEEDED
} from '../actions/vehicleActions';

const initialState = {
  marks: [],
  vehicles: [],
  status: 'idle',
  images: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MARKS_FETCH_SUCCEEDED:
      return {
        ...state,
        marks: action.payload
      };
    case VEHICLES_FETCH_REQUESTED:
      return {
        ...state,
        status: 'loading',
      };
    case VEHICLES_FETCH_SUCCEEDED:
      return {
        ...state,
        vehicles: action.payload,
        status: 'idle'
      };
    case IMAGES_FETCH_SUCCEEDED:
      return {
        ...state,
        images: {
          ...state.images,
          [action.payload.id]: action.payload.images,
        }
      };
    default:
      return state;
  }
};

export default reducer;
