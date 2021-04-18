import { storageService } from './StorageService';
const FAVORITE_KEY = 'favorites_DB';
var gFavorites = loadFavorites() || [];
export const favoriteService = {
  addFavoriteLocation,
  removeFavoriteLocation,
  loadFavorites,
};
function loadFavorites() {
  let favorites = storageService.load(FAVORITE_KEY);
  return favorites;
}
//RETURN A PROMISE TO IMPLEMENT A SERVER REQUESTS//
async function addFavoriteLocation(location) {
  gFavorites.push(location);
  _saveToStorage();
  return location;
}

async function removeFavoriteLocation(cityCodeId) {
  const favoritesFiltered = gFavorites.filter(
    (location) => location.cityCode !== cityCodeId
  );
  gFavorites = favoritesFiltered;
  _saveToStorage();
}

function _saveToStorage() {
  if (gFavorites.length === 0) storageService.remove(FAVORITE_KEY);
  storageService.save(FAVORITE_KEY, gFavorites);
}
