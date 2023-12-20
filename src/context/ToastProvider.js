import { createContext, useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
    const [data, setData] = useState({
        open: false,
        timeout: 3000,
        message: '',
        type: 'info', //error, warning, info, success
        position: ''
    });

    const setToast = (props) => {
        setData({
            open: true,
            ...props
        })
    }


    useEffect(() => {
        if (data.message != '') {
            setTimeout(() => {
                setData({
                    open: false,
                    timeout: 3000,
                    message: '',
                    type: 'info', //error, warning, info, success
                    position: ''
                })
            }, data.timeout || 3000)
        }
    }, [data])

    return (

        <ToastContext.Provider value={{ data, setToast }}>
            {children}
            <Snackbar open={data.open} anchorOrigin={{
                vertical: data.position ? data.position.split('-')[0] : 'bottom',
                horizontal: data.position ? data.position.split('-')[1] : 'left'
            }}
            >
                <Alert severity={data.type || 'info'} sx={{ width: '100%' }}>
                    {data.message}
                </Alert>
            </Snackbar>
        </ToastContext.Provider >
    )
}


export default ToastContext;