import { Alert, Box, Typography, AlertTitle, Button } from '@mui/material'
import React from 'react'
import { LoginButton } from '../../../CustomElements/Buttons/Buttons'
import { LoginTextField } from '../../../CustomElements/TextFields/TextFields'
import axiosp from '../../../Utils/axiosConfig'
import { VGap } from '../../../CustomElements/Gaps/Gap'

const ForgotPassword = () => {

    const handleEmailEnter = async (e) => {

        e.preventDefault()

        const email = e.target.email.value
        console.log(email)

        try {
            const res = await axiosp.post('/user/forget_password', {
                email: email
            })
            if (res.status == 201) {
                return alert('Email sent successfully!')
            }
            console.log(res.data, "status:", res.status)
        } catch (err) {
            console.log(err)
            return alert('Some error ocurred!')

        }


    }


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            height: '100vh',
            justifyContent: 'center',
            marginTop: '-5rem',
        }}>



            <img className='img-logo' src='/images/rapid-consulting-logo.png' />
            <Typography variant='h6'>Forgot Password?</Typography>
            <Typography variant='body1'>Don't worry, we have got it covered!</Typography>
            <VGap value={'0.5rem'} />
            <Typography fontSize={'0.9rem'} color={'#00000080'}>A password reset link will be sent to you on the registered email! </Typography>

            <form onSubmit={handleEmailEnter} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem'
            }}>

                <LoginTextField sx={{
                    background: '#FFEEEE50',
                    width: '300px'

                }} name='email' icon='alternate_email' type='email' placeholder='enter registered email...' />
                <Button type={'submit'} sx={{
                    background: '#ffeeee',
                    borderRadius: '1rem',
                    fontWeight: '500',
                    fontSize: '1rem',
                    paddingX: '4rem'
                }}>Send</Button>

            </form>

        </Box>
    )
}

export default ForgotPassword