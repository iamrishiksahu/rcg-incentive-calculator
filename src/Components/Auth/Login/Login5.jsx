import { Box, Container, Card, Checkbox, Typography } from '@mui/material'
import React, { useRef, useEffect } from 'react'
import { Box50 } from '../../../CustomElements/Containers/Box50'
import { VGap } from '../../../CustomElements/Gaps/Gap'
import { H3, PText, Small } from '../../../CustomElements/Typography/Typgraphy'
import { LoginButton } from '../../../CustomElements/Buttons/Buttons'
import { LoginTextField } from '../../../CustomElements/TextFields/TextFields'
import { H2 } from '../../../CustomElements/Typography/Typgraphy'
import { FlexBoxH } from '../../../CustomElements/Containers/FlexBoxH'
import './Login.css'
import axiosp from '../../../Utils/axiosConfig'
import { useSelector, useDispatch } from 'react-redux';
import { setAuthData } from '../../../features/auth/authState';

import { useNavigate } from 'react-router'
import useAuth from '../../../customHooks/useAuth'

const Login5 = () => {

    const navigate = useNavigate();
    const refEmail = useRef()
    const refPassword = useRef()
    const {setAuth} = useAuth()
    const from = window.location.state?.from?.pathname || '/dashboard';

    const dispatch = useDispatch();
    const authData = useSelector((state) => state.authData);

    useEffect(() => {
        console.log('authData: ', authData)
    }, [authData])

    const loginHandler = async (e) => {
        e.preventDefault()

        try {

            const res = await axiosp.post('/login_user/', {
                email: refEmail.current.value,
                password: refPassword.current.value
            })

            const accessToken = res?.data?.access_token

            console.log(res.data)
            if (accessToken) {
                dispatch(setAuthData(res.data));
                setAuth(res.data)
                // navigate('/dashboard')

                navigate(from, { replace: true });
            }


        } catch (err) {
            console.log(err)
        }
    }
    return (


        <div className='login-main-container'>



            {/* Add logo */}


            <div className='login-grid-section'>

                {/* 2 CONTAINERS */}
                <div className='login-left-container'>
                    {/* Contains the left image */}
                    <img className='img-logo' src='/images/rapid-consulting-logo.png' />

                    <img src='/images/login-page-hero-vector.svg' style={{ marginTop: '-4rem' }} />

                    <PText bold >Redefining HR Management</PText >
                    <PText sx={{ textAlign: 'center' }}>
                        The best Human Resource Management Platform<br />
                        Powering Over 500+ Businesses.</PText>
                    <Small sx={{ color: 'var(--color-info-dark)' }}>© 2023 - Rapid Consulting Services</Small>

                </div>
                {/* Contains the login system */}

                <div className='login-right-container'>

                    <div className='login-card'>

                        <Box sx={{

                            display: 'flex',
                            gap: '0.5rem',

                        }}>

                            <H2 sx={{
                                fontWeight: '500',
                                color: 'white',
                                fontSize: '2.5rem'
                            }}>HR</H2>
                            <H2 sx={{
                                fontWeight: '300',
                                color: 'white',
                                fontSize: '2.5rem'

                            }}>Portal</H2>
                        </Box>

                        <VGap value='1rem' />


                        <PText>Sign in with your Account.</PText>
                        <VGap value='0.5rem' />

                        {/* <VGap value='1rem' /> */}

                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <PText>Email</PText>
                            <LoginTextField inputRef={refEmail} icon='alternate_email' type='email' placeholder='youremail@gmail.com' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <PText>Password</PText>
                            <LoginTextField inputRef={refPassword} icon='key' type='password' placeholder='password' />
                        </Box>

                        <FlexBoxH sx={{
                            justifyContent: 'space-between',
                            width: '100%'
                        }}>
                            <FlexBoxH sx={{
                                gap: '0px',
                                marginLeft: '-0.6rem',
                            }}>
                                <Checkbox />
                                <PText>Remember Me</PText>
                            </FlexBoxH>
                            <PText sx={{ cursor: 'pointer' }}
                            onClick={()=>{navigate('/forgot-password')}}
                             >Forgot Password</PText>
                        </FlexBoxH>



                        <VGap value='1rem' />

                        <LoginButton onClick={loginHandler} >Login</LoginButton>

                    </div>


                </div>


            </div>

        </div >

    )
}

export default Login5