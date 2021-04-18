import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './reducers/AppReducer';
import { weatherReducer } from './reducers/WeatherReducer';

const rootReducer = combineReducers({
  appReducer,
  weatherReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
