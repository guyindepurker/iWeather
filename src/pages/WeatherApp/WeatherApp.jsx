
import React, { useEffect } from 'react'

import SearchLocation from 'cmps/SearchLocation/SearchLocation';
import ForecastList from 'cmps/ForecastList/ForecastList';
import LocationDetails from 'cmps/LocationDetails/LocationDetails';
import Loader from 'cmps/Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteLocation, loadDefaultLocation, loadCurrLocationWeather, removeFavoriteLocation, loadForecast } from 'store/actions/WeatherActions';
import useQuery from 'custom-hooks/useQuery';


const WeatherApp = (props) => {
  const { location, forecasts, isFahrenheit, favorites } = useSelector(state => state.weatherReducer)
  const dispatch = useDispatch()
  const queryLocation = useQuery(['locationName', 'cityCode', 'countryName'])
  const isFavorite = favorites.some(currLoc => currLoc?.cityCode === location?.cityCode)

  useEffect(() => {
    if (!location && !forecasts.length){
      dispatch(loadDefaultLocation())
    }
 
  }, [])

  useEffect(() => {
    const { locationName, cityCode, countryName } = queryLocation
    if (locationName && cityCode && countryName) {
      dispatch(loadCurrLocationWeather(queryLocation))
      dispatch(loadForecast(queryLocation))
    }
  }, [queryLocation.locationName, queryLocation.cityCode, queryLocation.country])


  const onFavoriteHandler = (favoriteType) => {
    favoriteType === 'like' ? dispatch(addFavoriteLocation(location)) : dispatch(removeFavoriteLocation(location.cityCode))
  }

  if (!location && !forecasts.length) return <Loader />
  return (
    <section className="weather-app">
      <SearchLocation />
      <LocationDetails onFavoriteHandler={onFavoriteHandler} isFahrenheit={isFahrenheit} isFavorite={isFavorite} location={location} />
      <ForecastList isFahrenheit={isFahrenheit} forecasts={forecasts} />
    </section>
  )
}

export default WeatherApp
