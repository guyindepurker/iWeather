import { userPrefService } from 'services/UserPrefService';
import { SET_TOAST, SET_IS_DARK_MODE } from '../types';

export function toggleDarkMode(prevState) {
  return (dispatch) => {
    userPrefService.saveThemeMode(!prevState)
    dispatch(showToast({ type: 'info', msg: 'Theme has changed' }));
    dispatch({ type: SET_IS_DARK_MODE });
  };
}
export function showToast(toast) {
  const { type: severity, summary = '', life = 3000, msg: detail } = toast;
  const toastUpdateKeys = { severity, summary, detail, life };
  return { type: SET_TOAST, toast: toastUpdateKeys };
}
