
import React from 'react'

import './AppHeader.scss'
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import {Link } from 'react-router-dom';


const AppHeader = () => {
    return (
        <header className="app-header">
            <div className="header-container flex align-center space-between">
                <Link to="/">
                <Logo />
                </Link>
                <Navbar />
            </div>
        </header>
    )
}

export default AppHeader
