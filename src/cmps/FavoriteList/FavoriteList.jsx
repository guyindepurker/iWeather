
import React from 'react'

import './FavoriteList.scss'
import FavoritePreview from '../FavoritePreview/FavoritePreview';

const FavoriteList = ({favorites,removeLocation,isFahrenheit}) => {
    if(!favorites.length) return null
    return (
        <ul className=" favorite-list flex wrap justify-center">
            {favorites.map((favorite,key)=>  <FavoritePreview  isFahrenheit={isFahrenheit} removeLocation={removeLocation} key={key} favorite={favorite} />)}
        </ul>
    )


}

export default FavoriteList
