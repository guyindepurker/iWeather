
import React from 'react'

import './Title.scss'

const Title = ({children}) => {
    return (
        <h1 className="title-primary">
        {children}
        </h1>
    ) 
}

export default Title
