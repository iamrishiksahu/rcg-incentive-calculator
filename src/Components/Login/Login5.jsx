import { Box, Container, Card, Checkbox, Typography } from '@mui/material'
import React from 'react'
import { Box50 } from '../../CustomElements/Containers/Box50'
import { VGap } from '../../CustomElements/Gaps/Gap'
import { H3, PText, Small } from '../../CustomElements/Typography/Typgraphy'
import { LoginButton } from '../../CustomElements/Buttons/Buttons'
import { LoginTextField } from '../../CustomElements/TextFields/TextFields'
import { H2 } from '../../CustomElements/Typography/Typgraphy'
import { FlexBoxH } from '../../CustomElements/Containers/FlexBoxH'
import './Login.css'
import axios from 'axios'

const Login5 = () => {

    const testApi = async () => {

        // axios.post('https://bb71-122-175-123-108.ngrok-free.app/contacts_info', {

        //         "first_name": "Test Rks",
        //         "last_name": "string",
        //         "legal_name": "string",
        //         "suffix": "string",
        //         "emails": "user@example.com",
        //         "address": "string",
        //         "city": "string",
        //         "state": "string",
        //         "pin_code": 2147483647,
        //         "country": "string",
        //         "home": "string",
        //         "mobile": "string",
        //         "work": "string",
        //         "ext": "string",
        //         "home_fax": "string",
        //         "Pay_rate": "string",
        //         "Bill_rate": "string"

        // }).then((data) => {
        //     console.log(data)
        // }).catch((err) => {
        //     console.log(err)
        // })

        try {

            //     fetch('http://bb71-122-175-123-108.ngrok-free.app/contacts_info/')
            //  .then(response => console.log(response))
            //  .then(data => {
            //     console.log(data)
            //  })


        } catch (err) {
            console.log(err);
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

                    <img src='/images/login-page-hero-vector.svg' style={{marginTop: '-4rem'}} />

                    <PText bold >Redefining HR Management</PText >
                    <PText sx={{ textAlign: 'center' }}>
                        The best Human Resource Management Platform<br />
                        Powering Over 500+ Businesses.</PText>
                    <Small sx={{ color: 'var(--color-info-dark)'}}>© 2023 - Rapid Consulting Services</Small>

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
                            <PText sx={{ cursor: 'pointer' }} >Forgot Password</PText>
                        </FlexBoxH>



                        <VGap value='1rem' />

                        <LoginButton onClick={testApi} >Login</LoginButton>

                    </div>


                </div>


            </div>

        </div >

    )
}

export default Login5