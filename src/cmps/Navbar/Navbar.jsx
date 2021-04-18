
import React,{ useState} from 'react'
import './Navbar.scss'
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from 'store/actions/AppActions';
import { toggleDegrees } from 'store/actions/WeatherActions';
import { useHistory } from 'react-router';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button } from 'primereact/button';
import {InputSwitch} from 'primereact/inputswitch';

import BackDrop from '../BackDrop/BackDrop';

import { FaTemperatureHigh } from 'react-icons/fa';
import { CgDarkMode } from 'react-icons/cg';


const Navbar = () => {
    const {isDarkMode} = useSelector(state=>state.appReducer)
    const {isFahrenheit,favorites} = useSelector(state=>state.weatherReducer)
    const isHamburgerMenu = useMediaQuery('(max-width:850px)')
    const [isHamburgerMenuOpen,setHamburgerMenuOpen] =useState(false) 
    const dispatch = useDispatch()
    const history = useHistory()

    const links = [{label:'Home',path:'/',iconTxt:'pi-home'},{label:'Favorites',path:'/favorites',iconTxt:'pi-star-o'}]
    const buttons = [{Icon:FaTemperatureHigh,label:`${isFahrenheit ? 'Celsius' :'Fahrenheit' }`,func:toggleDegrees,value:isFahrenheit},{Icon:CgDarkMode,label:`${isDarkMode ? 'Light' : 'Dark'}`,func:toggleDarkMode,value:isDarkMode}]
    
    return (
        <>
        {isHamburgerMenu&&<i onClick={()=>setHamburgerMenuOpen(prevState=>!prevState)} className={`pi pi-${isHamburgerMenuOpen ? 'times' :'bars'} hamburger-icon`}></i>}
        <nav className={`navbar ${isHamburgerMenu&& isHamburgerMenuOpen ? 'open-nav' :''}`}>
        <ul className="main-nav flex gap align-center clean-list">
        {links.map(({label,path,iconTxt},key)=><li key={key} className="nav-item"><Button className="p-button-raised p-button-info" badge={label==='Favorites' && favorites.length >=1 ? favorites.length+'' : null } icon={`pi ${iconTxt}`} label={label} onClick={()=>history.push(path)} /></li>)}
        {buttons.map(({Icon,label,value,func},key)=><li key={key} className="nav-item flex align-center" ><Icon /><InputSwitch  tooltip={label} tooltipOptions={{position: 'bottom'}} checked={value} onChange={() => dispatch(func(value))}/></li>)}
        </ul>
        </nav>
        <BackDrop isOpen={isHamburgerMenuOpen} closeFunc={()=>setHamburgerMenuOpen(false)} />
        </>
    )

   
}

export default Navbar
