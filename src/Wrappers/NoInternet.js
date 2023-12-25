import { Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const NoInternetConnection = (props) => {
    // state variable holds the state of the internet connection
    const [isOnline, setOnline] = useState(true);

    // On initization set the isOnline state.
    useEffect(() => {
        setOnline(navigator.onLine)
    }, [])

    // event listeners to update the state 
    window.addEventListener('online', () => {
        setOnline(true)
    });

    window.addEventListener('offline', () => {
        setOnline(false)
    });

    // if user is online, return the child component else return a custom component
    if (isOnline) {
        return (
            props.children
        )
    } else {
        console.log(' No Internet access')

        return (
            <Stack sx={{
                alignItems: 'center',
                height: '100vh',
                justifyContent: 'center'
            }}>

                
                <Typography variant='h2'>

                    :( Can't connect to the <Typography variant='span' color={'primary'} fontSize={'4rem'} fontWeight={500}>INTERNET</Typography>
                </Typography>

                <Typography variant='h3' align='center' mt={'3rem'} fontWeight={600}>Please check your network connection!</Typography>
            </Stack>
        )
    }
}

export default NoInternetConnection;