import axios from 'axios';
const API_KEY = 'fGEfGFjUWSQGiMkChU0V7M48l3UalUbb';
const BASE_URL = 'https://dataservice.accuweather.com/';
const DEFAULT_CITY_CODE = '215854';
const DEFAULT_CITY_NAME = 'Tel Aviv';
export const weatherService = {
  getCitiesCode,
  getWeather,
  getForecast,
};

async function getCitiesCode(query = DEFAULT_CITY_NAME) {
  try {
    const res = await axios.get(
      `${BASE_URL}locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
    );
    const locations = _buildLocation(res.data);
    return locations;
  } catch (err) {
    throw err;
  }
}

async function getWeather(locationData) {
  const { cityCode } = locationData;
  try {
    const res = await axios.get(
      `${BASE_URL}currentconditions/v1/${cityCode}?apikey=${API_KEY}`
    );
    const weather = _buildWeather(res.data[0]);
    const location = { ...locationData, ...weather };
    return location;
  } catch (err) {
    throw err;
  }
}

async function getForecast(cityCode = DEFAULT_CITY_CODE) {
  try {
    const res = await axios.get(
      `${BASE_URL}forecasts/v1/daily/5day/${cityCode}?apikey=${API_KEY}`
    );
    const forecasts = _buildForecast(res.data.DailyForecasts);
    return forecasts;
  } catch (err) {
    throw err;
  }
}

function _buildWeather(weatherData) {
  const {
    WeatherText: weatherTxt,
    WeatherIcon: weatherIcon,
    Temperature: {
      Metric: { Value: unitC },
      Imperial: { Value: unitF },
    },
  } = weatherData;
  return {
    weatherTxt,
    weatherIcon,
    unitC,
    unitF,
  };
}

function _buildForecast(forecastsData) {
  const cleanForecasts = forecastsData.map((forecast) => {
    const {
      Date: date,
      Day: { Icon: icon, IconPhrase: weatherTxt },
      Temperature: {
        Maximum: { Value: maxTempValue },
        Minimum: { Value: minTempValue },
      },
    } = forecast;
    return { date, icon, weatherTxt, maxTempValue, minTempValue };
  });
  return cleanForecasts;
}

function _buildLocation(locationsData) {
  const cleanLocations = locationsData.map((location) => {
    const {
      Key: cityCode,
      LocalizedName: locationName,
      Country: { LocalizedName: countryName },
    } = location;
    return {
      cityCode,
      locationName,
      countryName,
    };
  });

  return cleanLocations;
}
