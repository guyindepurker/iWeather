
import React from 'react'

import FavoriteList from 'cmps/FavoriteList/FavoriteList';
import Title from 'cmps/Title/Title';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavoriteLocation } from 'store/actions/WeatherActions';
import ErrorMsg from 'cmps/ErrorMsg/ErrorMsg';

const Favorites = () => {
  const { favorites, isFahrenheit } = useSelector(state => state.weatherReducer)
  const dispatch = useDispatch()
  const removeLocation = (cityCode) => {
    dispatch(removeFavoriteLocation(cityCode))
  }


  if (!favorites.length || !favorites) return <ErrorMsg>Sorry , but you have not saved anything yet..</ErrorMsg>
  return (
    <section className="favorites">
      <Title>Your Favorite Locations</Title>
      <FavoriteList removeLocation={removeLocation} isFahrenheit={isFahrenheit} favorites={favorites} />
    </section>
  )


}

export default Favorites
