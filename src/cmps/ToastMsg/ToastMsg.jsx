
import React, { useRef ,useEffect} from 'react'
import { Toast } from 'primereact/toast';

import './ToastMsg.scss'
import { useSelector } from 'react-redux';

const ToastMsg = () => {
    const toastRef = useRef(null);
    const {toast} = useSelector(state=>state.appReducer)
    useEffect(() => {
        toastRef.current.show(toast)
    }, [toast])
    return (
        <>
       <Toast className="toast-msg" ref={toastRef} position="bottom-left" ></Toast>
        </>
    )

   
}

export default ToastMsg
