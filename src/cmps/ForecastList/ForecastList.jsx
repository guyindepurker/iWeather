
import React from 'react'

import './ForecastList.scss'
import ForecastPreview from '../ForecastPreview/ForecastPreview';

const ForecastList = ({forecasts,isFahrenheit}) => {
    if(!forecasts.length) return null
    return (
        <ul className="forecast-list flex  wrap center-center">
            {forecasts.map((forecast,key)=> <ForecastPreview isFahrenheit={isFahrenheit} key={key} forecast={forecast} />)}
        </ul>
    )

   
}

export default ForecastList
