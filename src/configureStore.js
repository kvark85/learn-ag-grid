import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import vehicleState from './app/reducers/vehicleState';
import rootSaga from './app/sagas/vehicleSagas';

const allReducers = combineReducers({ vehicleState });

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga);
