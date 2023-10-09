import React from 'react'
import { Card, Container, TextField, Typography, Box, Divider, InputAdornment } from '@mui/material';
import { BackgroundContainer } from '../../CustomElements/Containers/BackgroundContainer';
import { Box50 } from '../../CustomElements/Containers/Box50';
import { FlexBoxH } from '../../CustomElements/Containers/FlexBoxH';
import { H1, H2, PText, Small } from '../../CustomElements/Typography/Typgraphy';
import { LoginTextField } from '../../CustomElements/TextFields/TextFields';
import { VGap } from '../../CustomElements/Gaps/Gap';
import { LoginButton } from '../../CustomElements/Buttons/Buttons';


const Login = () => {
    return (
        <Container sx={{
            display: 'flex',
            minHeight: '100vh',
            minWidth: '100vw',
            background: 'var(--bg-gradient-1)',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem',
        }}>
            <Card sx={{
                minWidth: '55rem',
                minHeight: '30rem',
                display: 'flex',
                boxShadow: '0 0 50px #7f75a36e'
            }}>

                <Box50 sx={{
                    flexDirection: 'column',
                    backgroundColor: 'var(--color-primary)',
                    borderRight: '4px var(--color-light) solid'
                }}>

                    {/* Add company logo */}

                    <FlexBoxH sx={{
                        backgroundColor: 'white',
                        marginTop: '0rem',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        boxShadow: 'var(--box-shadow)'
                    }}>

                        <img width='220px' src='/images/rapid-consulting-logo.png' />

                    </FlexBoxH>

                    <VGap value='1rem' />
                    <H2 sx={{ fontWeight: '600', color: 'var(--white)' }}>HR Portal</H2>

                </Box50>
                <Box50 sx={{
                    flexDirection: 'column',
                    gap: '1rem',
                    backgroundColor: 'white',
                }}>

                    <H2 sx={{
                        fontWeight: '700',
                        borderBottom: '2px var(--color-info-dark) solid'
                    }}>LOGIN</H2>

                    <VGap value='1rem' />

                    <LoginTextField icon='alternate_email' type='email' placeholder='Email' />
                    <LoginTextField icon='key' type='password' placeholder='Password' />

                    <VGap value='0.25rem' />

                    <Small>Forgot Password?</Small>
                    <VGap value='1rem' />

                    <LoginButton>Login Now</LoginButton>

                </Box50>


            </Card>


        </Container>
    )
}

export default Login;