import { Box, Container, Card, Checkbox, Typography } from '@mui/material'
import React, { useRef, useEffect, useState } from 'react'
import { VGap } from '../../../CustomElements/Gaps/Gap'
import { PText, Small } from '../../../CustomElements/Typography/Typgraphy'
import { LoginButton } from '../../../CustomElements/Buttons/Buttons'
import { LoginTextField } from '../../../CustomElements/TextFields/TextFields'
import { H2 } from '../../../CustomElements/Typography/Typgraphy'
import { FlexBoxH } from '../../../CustomElements/Containers/FlexBoxH'
import './Login.css'
import axiosp from '../../../Utils/axiosConfig'
import { useSelector, useDispatch } from 'react-redux';
import { setAuthData } from '../../../features/auth/authState';
import useToast from '../../../customHooks/useToast'
import { useNavigate } from 'react-router'
import useAuth from '../../../customHooks/useAuth'

const Login5 = () => {

    const navigate = useNavigate();
    const refEmail = useRef()
    const refPassword = useRef()
    const { setAuth } = useAuth()
    const from = window.location.state?.from?.pathname || '/dashboard';

    const dispatch = useDispatch();
    const authData = useSelector((state) => state.authData);

    const { setToast } = useToast()

    useEffect(() => {
        console.log('authData: ', authData)
    }, [authData])

    const loginHandler = async (e) => {
        e.preventDefault()

        const email =  refEmail.current.value;
        const password = refPassword.current.value;

        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;


        if(email == '' || !emailRegex.test(email)){
            setToast({type: 'error', message: 'Please enter a valid email!', position: 'top-center'})
            return 
        }

        if(password == ''){
            setToast({type: 'error', message: 'Please enter your password!', position: 'top-center'})
            return 
        }

        try {
            const res = await axiosp.post('/user/login_user/', {
                email: email,
                password: password
            })

            // const sampleResponseBody = {


            //     "user_role": "Employee",
            //     "user_id": 2,
            //     "user_full_name": "string string string",
            //     "user_email": "chapasuma@gmail.com",

            //     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyOTA2Mzc5LCJpYXQiOjE3MDI5MDYwNzksImp0aSI6IjQ3MzRhM2IzZDJlNjQzZGNiMGRkMjdmYjRkNzkyOTQ3IiwidXNlcl9pZCI6Mn0.VTMSPJIzTrXyJk6lrSYL9B94Fj5JWIru3WWxRIMa_n8",

            //     "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwMjk5MjQ3OSwiaWF0IjoxNzAyOTA2MDc5LCJqdGkiOiIyMGJjMTcwYTllYjA0YmY1YTBjMGI5Zjg2MDY5YmQ3NiIsInVzZXJfaWQiOjJ9.7eS0GpEs4KC9s-2fN9vPDBz8EahzlI277FjAJ-WwqRo",


            // }


            const accessToken = res?.data?.access_token

            console.log(res.data)
            if (accessToken) {
                dispatch(setAuthData(res.data));
                setAuth(res.data)
                setToast({ type: 'success', message: 'Login successful!' })
                navigate('/dashboard')

            } else {
                setToast({ type: 'error', message: 'Something went wrong! Please contact administrator!', position: 'top-center' })
            }


        } catch (err) {
            console.log(err)
            setToast({ type: 'error', message: 'Something went wrong! Please contact administrator!', position: 'top-center' })
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
                                }}>YUKTA</H2>
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
                                <LoginTextField inputRef={refEmail} icon='alternate_email' type='email' placeholder='yourmail@email.com' />
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
                                    onClick={() => { navigate('/forgot-password') }}
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