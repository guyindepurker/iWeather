import { storageService } from './StorageService';
const THEME_KEY = 'theme_mode';
const TEMP_KEY = 'temp';
export const userPrefService = {
  loadThemeMode,
  loadTemp,
  saveThemeMode,
  saveTemp,
};
function loadThemeMode() {
  const isDarkMode = storageService.load(THEME_KEY) || false;
  return isDarkMode;
}
function loadTemp() {
  const temp = storageService.load(TEMP_KEY) || false;
  return temp;
}
function saveThemeMode(value) {
  storageService.save(THEME_KEY, value);
}
function saveTemp(value) {
  storageService.save(TEMP_KEY, value);
}
