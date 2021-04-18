
import React from 'react'
import moment from 'moment'
import './ForecastPreview.scss'
import IconWeather from '../IconWeather/IconWeather';
import { utilService } from 'services/UtilService';

const ForecastPreview = ({forecast,isFahrenheit}) => {
    const {icon,date,weatherTxt,maxTempValue,minTempValue} = forecast
    const getTempsValues = () =>{
        let minTemp=null
        let maxTemp=null
        if(isFahrenheit){
           minTemp = minTempValue
           maxTemp = maxTempValue
        } 
        else{
            minTemp = utilService.convertFahrenheitToCelsius(minTempValue)
            maxTemp = utilService.convertFahrenheitToCelsius(maxTempValue)
        }
        return {minTemp,maxTemp}
    }
    const {minTemp,maxTemp} = getTempsValues()
    const tempUnit = isFahrenheit ? '℉' : '℃' 
    const dateToShow = moment(date).format('LL')
    const day =moment(date).format('dddd');
    return (
        <li className="forecast-preview">

            <h3 className="day">{day}</h3>
            <IconWeather icon={icon} />
            <span className="temp-title">{weatherTxt}</span>
            <span className="forecast-date">{dateToShow}</span>
            <div className="forecast-temps">{`${minTemp} ${tempUnit} | ${maxTemp}${tempUnit}`}</div>
        </li>
    )

   
}

export default ForecastPreview
