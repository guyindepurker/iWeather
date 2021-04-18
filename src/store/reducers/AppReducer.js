import { SET_TOAST,  SET_IS_DARK_MODE } from '../types';
import { userPrefService } from 'services/UserPrefService';
const INITIAL_STATE = {
  isDarkMode: userPrefService.loadThemeMode(),
  toast: null,
};
export function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case SET_IS_DARK_MODE:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    case SET_TOAST:
      return {
        ...state,
        toast: action.toast,
      };

    default:
      return state;
  }
}
