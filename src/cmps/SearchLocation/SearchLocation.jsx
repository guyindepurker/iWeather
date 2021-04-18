
import React, { useState } from 'react'

import './SearchLocation.scss'
import { useDispatch, useSelector } from 'react-redux';
import { AutoComplete } from 'primereact/autocomplete';
import { loadCurrLocationWeather, loadForecast, loadCitesCode } from 'store/actions/WeatherActions';
import { utilService } from 'services/UtilService';
import { showToast } from 'store/actions/AppActions';

const SearchLocation = () => {
    const dispatch = useDispatch()
    const { optionsLocation } = useSelector(state => state.weatherReducer)
    const [location, setLocation] = useState({ locationName: '' })

    const onSearchLocation = (ev) => {
        setTimeout(() => {
            const query = ev.query.trim()
            if (!query.length || query==='') return;
            const isValid = utilService.checkEnglishLetters(query)
            if (!isValid) {
                dispatch(showToast({type:'error',msg:'Only English letters allowed!'}))
            }
            else {
                dispatch(loadCitesCode(query))
            }

        }, 1000);
    }
  
    const onSelectLocation = ({value}) => {
        if (typeof value === 'string') {
            const updatedLocation = { ...location, locationName: value }
            setLocation(updatedLocation)
        } else {
            const savedLocation = value
            setLocation(savedLocation)
            dispatch(showToast({type:'success',msg:'Loading location...'}))
            dispatch(loadCurrLocationWeather(savedLocation))
            dispatch(loadForecast(savedLocation))
        }

    }
    const itemTemplate = (item) => {
        return (
            <div className="country-item">
                <div><i className="fas fa-map-marker"></i> {item.locationName},{item.countryName}</div>
            </div>
        );
    }
    return (
        <div className="search-location flex center-center">
            <AutoComplete value={location.locationName} suggestions={optionsLocation} itemTemplate={itemTemplate} completeMethod={onSearchLocation} placeholder="Search location..." field="locationName" onChange={onSelectLocation} />
        </div>
    )


}

export default SearchLocation
