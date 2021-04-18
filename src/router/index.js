import WeatherApp from 'pages/WeatherApp/WeatherApp';
import Favorites from 'pages/Favorites/Favorites';

export const Routes = [
  {
    path: '/favorites',
    component: Favorites,
  },
  {
    path: '/',
    component: WeatherApp,
  },
];
