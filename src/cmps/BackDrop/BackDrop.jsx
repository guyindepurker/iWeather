
import React from 'react'

import './BackDrop.scss'

const BackDrop = ({ isOpen, closeFunc }) => {
    if (!isOpen) return null
    return (
        <section onClick={closeFunc} className="back-drop">
        </section>
    )


}

export default BackDrop
