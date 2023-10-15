import { Box, Container, Card, Checkbox } from '@mui/material'
import React from 'react'
import { Box50 } from '../../CustomElements/Containers/Box50'
import { VGap } from '../../CustomElements/Gaps/Gap'
import { PText, Small } from '../../CustomElements/Typography/Typgraphy'
import { LoginButton } from '../../CustomElements/Buttons/Buttons'
import { LoginTextField } from '../../CustomElements/TextFields/TextFields'
import { H2 } from '../../CustomElements/Typography/Typgraphy'
import { FlexBoxH } from '../../CustomElements/Containers/FlexBoxH'
import './Login.css'

const Login4 = () => {
    return (


        <div className='login-main-container'>


            <img
                style={{

                    position: 'fixed',
                    right: '0rem',
                    width: '100vw',
                    top: '-3rem',
                    marginBottom: '0rem',
                    zIndex: '-1',
                }}

                src='/images/login-page/top-wave.svg'
            />
            <img
                style={{
                    position: 'fixed',
                    left: '-25rem',
                    bottom: '-20rem',
                    marginBottom: '0rem'
                }}

                src='/images/login-page/circle-2.svg'

            />


            <img
                style={{
                    position: 'fixed',
                    left: '3rem',
                    bottom: '-18rem',
                    marginBottom: '0rem'
                }}

                src='/images/login-page/circle-1.svg'

            />

            {/* Add logo */}

            <img className='img-logo' src='/images/rapid-consulting-logo.png' />

            <div className='login-grid-section'>

                {/* 2 CONTAINERS */}
                <div className='login-left-container'>
                    {/* Contains the left image */}

                    <img src='/images/login-page-hero-vector.svg' />

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
                            <LoginTextField icon='alternate_email' type='email' placeholder='youremail@gmail.com' />
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <PText>Password</PText>
                            <LoginTextField icon='key' type='password' placeholder='password' />
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
                            <PText sx={{cursor: 'pointer'}} >Forgot Password</PText>
                        </FlexBoxH>



                        <VGap value='1rem' />

                        <LoginButton >Login</LoginButton>

                    </div>


                </div>


            </div>

        </div >

    )
}

export default Login4