import { weatherService } from 'services/WeatherService';
import { userPrefService } from 'services/UserPrefService';
import {
  SET_IS_FAHRENHEIT,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_FORECAST,
  SET_LOCATION,
  SET_OPTIONS,
} from '../types';
import { favoriteService } from 'services/FavoriteService';

import { showToast } from './AppActions';

export function toggleDegrees(prevState) {
  return (dispatch) => {
    userPrefService.saveTemp(!prevState);
    dispatch(showToast({ type: 'info', msg: 'Temperature has changed' }));
    dispatch({ type: SET_IS_FAHRENHEIT });
  };
}

export function loadCitesCode(query) {
  return async (dispatch) => {
    try {
      const optionsLocation = await weatherService.getCitiesCode(query);
      dispatch({ type: SET_OPTIONS, optionsLocation });
    } catch (err) {
      dispatch(showToast({ type: 'error', msg: 'Network Error' }));
    }
  };
}

export function loadCurrLocationWeather(location) {
  return async (dispatch) => {
    try {
      const weatherLocation = await weatherService.getWeather(location);
      dispatch({ type: SET_LOCATION, location: weatherLocation });
    } catch (err) {
      dispatch(showToast({ type: 'error', msg: 'Cant Find Location' }));
    }
  };
}

export function loadForecast(location) {
  return async (dispatch) => {
    try {
      const forecasts = await weatherService.getForecast(location.cityCode);
      dispatch({ type: SET_FORECAST, forecasts });
    } catch (err) {
      dispatch(
        showToast({ type: 'error', msg: 'The forecast is not available' })
      );
    }
  };
}

export function loadDefaultLocation() {
  return async (dispatch) => {
    try {
      const [location] = await weatherService.getCitiesCode();
      const weather = await weatherService.getWeather(location);
      const forecasts = await weatherService.getForecast();
      dispatch({ type: SET_LOCATION, location: weather });
      dispatch({ type: SET_FORECAST, forecasts });
    } catch (err) {
      dispatch(showToast({ type: 'error', msg: 'Network Error' }));
    }
  };
}

export function addFavoriteLocation(location) {
  return async (dispatch) => {
    try {
      const favoriteLocation = await favoriteService.addFavoriteLocation(
        location
      );
      dispatch({ type: ADD_FAVORITE, favoriteLocation });
      dispatch(
        showToast({
          type: 'success',
          msg: 'Location has been added to favorites',
        })
      );
    } catch (err) {
      showToast({ type: 'error', msg: 'Can`t added to favorites' });
    }
  };
}
export function removeFavoriteLocation(cityCode) {
  return async (dispatch) => {
    try {
      await favoriteService.removeFavoriteLocation(cityCode);
      dispatch({ type: REMOVE_FAVORITE, cityCode });
      dispatch(
        showToast({
          type: 'success',
          msg: 'Location has been removed from favorites',
        })
      );
    } catch (err) {
      showToast({
        type: 'error',
        msg: 'Can`t removed location',
      });
    }
  };
}
