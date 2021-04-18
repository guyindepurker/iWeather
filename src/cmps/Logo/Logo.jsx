
import React from 'react'
import logo from 'assets/imgs/logo.svg'
import './Logo.scss'

const Logo = () => {

    return (
        <div className="logo flex relative">
            <img src={logo} alt="logo" />
            <span>iWeather</span>
        </div>
    )

   
}

export default Logo
