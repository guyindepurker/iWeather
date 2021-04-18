
import React from 'react'

import './FavoritePreview.scss'
import IconWeather from '../IconWeather/IconWeather';
import { useHistory } from 'react-router';

const FavoritePreview = ({favorite,removeLocation,isFahrenheit}) => {
const {cityCode,locationName,countryName,unitC,unitF,weatherTxt,weatherIcon} = favorite
  const temp =  isFahrenheit ? unitF : unitC
  const tempUnit = isFahrenheit ? '℉' : '℃'
  const history = useHistory()
  const loadLocationDetails=()=>{
    const query = `?locationName=${locationName}&cityCode=${cityCode}&countryName=${countryName}`
    history.push(`/${query}`)
  }
 const onRemoveLocation = (ev)=>{
   ev.stopPropagation();
   removeLocation(cityCode)
 }
return (
        <li onClick={loadLocationDetails} className="favorite-preview">
            <h2 className="favorite-title">{`${locationName} , ${countryName}`}</h2>
            <h3 className="favorite-temp">{`${temp} ${tempUnit}`}</h3>
            <div className="favorite-temp-info flex align-center">
               <IconWeather icon={weatherIcon} />
            <h4 className="favorite-weather-txt">{weatherTxt}</h4>
            </div>
            <i  onClick={onRemoveLocation} className="pi pi-star"></i>
        </li>
    )

   
}

export default FavoritePreview
