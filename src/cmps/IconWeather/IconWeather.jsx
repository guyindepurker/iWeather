
import React from 'react'

import './IconWeather.scss'

const IconWeather = ({icon}) => {
    const iconLocation = icon < 10 ? '0'+icon : icon
    return (
        <>
        <img className="icon-weather" src={`https://developer.accuweather.com/sites/default/files/${iconLocation}-s.png`} alt="icon weather" />
        </>
       
    ) 
}

export default IconWeather
