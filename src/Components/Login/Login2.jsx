import React from 'react'
import { Card, Container, TextField, Typography, Box, Divider, InputAdornment } from '@mui/material';
import { BackgroundContainer } from '../../CustomElements/Containers/BackgroundContainer';
import { Box50 } from '../../CustomElements/Containers/Box50';
import { FlexBoxH } from '../../CustomElements/Containers/FlexBoxH';
import { H1, H2, PText, Small } from '../../CustomElements/Typography/Typgraphy';
import { LoginTextField } from '../../CustomElements/TextFields/TextFields';
import { VGap } from '../../CustomElements/Gaps/Gap';
import { LoginButton } from '../../CustomElements/Buttons/Buttons';


const Login2 = () => {
    return (
        <Container sx={{
            display: 'flex',
            minHeight: '100vh',
            minWidth: '100vw',
            // backgroundColor: '#e3e3e384',
            background: 'linear-gradient(to right,var(--color-primary-light) 0%,var(--color-primary-light) 50%,var(--color-primary) 50%,var(--color-primary) 100% )',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
        }}>


            <Card sx={{
                minWidth: '80rem',
                minHeight: '40rem',
                borderRadius: '2rem',
                display: 'flex',
                boxShadow: '0 0 50px #ffffff40'
            }}>

                <img src='' />

                <Box50 sx={{
                    flexDirection: 'column',
                    gap: '1rem',
                    backgroundColor: 'white',
                }}>

                    <img style={{ marginTop: '-4rem' }} width='180px' src='/images/rapid-consulting-logo.png' />



                    <VGap value='-2rem' />

                    <H2 sx={{
                        fontWeight: '700',
                        borderBottom: '2px var(--color-info-dark) solid'
                    }}>HR Portal</H2>

                    <PText>Login with your credentials.</PText>

                    {/* <VGap value='1rem' /> */}

                    <LoginTextField icon='alternate_email' type='email' placeholder='Email' />
                    <LoginTextField icon='key' type='password' placeholder='Password' />

                    <VGap value='0.25rem' />

                    <LoginButton >Login Now </LoginButton>
                    {/* <VGap value='1rem' /> */}
                    <PText sx={{cursor: 'pointer'}}>Forgot Password?</PText>


                </Box50>
                <Box50 sx={{
                    flexDirection: 'column',
                    backgroundColor: 'var(--color-primary-light-2)',
                }}>



                    <H2 sx={{fontWeight: '700'}}>Welcome Back!</H2>
                    <Small>"A new day comes with all new energy and enthusiasm"</Small>
                    <VGap value='3rem' />
                    <img style={{
                        marginLeft: '-3rem',
                    }} width='550px' src='/images/login-page-hero-image.png' />



                </Box50>



            </Card>


        </Container>
    )
}

export default Login2;