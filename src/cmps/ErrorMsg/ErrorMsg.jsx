
import React from 'react'

import './ErrorMsg.scss'

const ErrorMsg = ({children}) => {

    return (
        <section className="error-msg">
       {children}
        </section>
    )

   
}

export default ErrorMsg
