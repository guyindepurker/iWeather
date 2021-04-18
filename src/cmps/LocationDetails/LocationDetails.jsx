
import React from 'react'

import './LocationDetails.scss'
import IconWeather from '../IconWeather/IconWeather';

const LocationDetails = ({ location, isFahrenheit, onFavoriteHandler, isFavorite }) => {
    const { locationName, countryName, unitF, unitC, weatherIcon, weatherTxt } = location
    const unitTemp = isFahrenheit ? '℉' : '℃'
    const temp = isFahrenheit ? unitF : unitC
    const favoriteType = isFavorite ? 'unLike' : 'like'
    const favoriteClass = isFavorite ? 'like' : 'unlike'
    return (
        <section className="location-details relative margin-bottom">
            <h2 className="location-title">{locationName} , {countryName}</h2>
            <IconWeather icon={weatherIcon} />
            <h3 className="location-temp-txt">{weatherTxt}</h3>
            <h3 className="location-temp">{temp} {unitTemp}</h3>
            <i onClick={() => onFavoriteHandler(favoriteType)} className={`pi pi-star ${favoriteClass}`}></i>
        </section>
    )


}

export default LocationDetails
