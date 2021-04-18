import { favoriteService } from 'services/FavoriteService';
import { userPrefService } from 'services/UserPrefService';

import {
  SET_IS_FAHRENHEIT,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  SET_FORECAST,
  SET_LOCATION,
  SET_OPTIONS
} from '../types';

const INITIAL_STATE = {
  optionsLocation: [],
  favorites: favoriteService.loadFavorites() || [],
  location: null,
  forecasts: [],
  isFahrenheit: userPrefService.loadTemp(),
};
export function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_OPTIONS: {
      return {
        ...state,
        optionsLocation: action.optionsLocation,
      };
    }
    case SET_LOCATION:
      return {
        ...state,
        location: action.location,
      };
    case SET_FORECAST:
      return {
        ...state,
        forecasts: action.forecasts,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.favoriteLocation],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(
          (location) => location.cityCode !== action.cityCode
        ),
      };
    case SET_IS_FAHRENHEIT:
      return {
        ...state,
        isFahrenheit: !state.isFahrenheit,
      };
    default:
      return state;
  }
}
