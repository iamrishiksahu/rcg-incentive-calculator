import { Alert, Box, Typography, AlertTitle, Button } from '@mui/material'
import React from 'react'
import { LoginButton } from '../../../CustomElements/Buttons/Buttons'
import { LoginTextField } from '../../../CustomElements/TextFields/TextFields'
import axiosp from '../../../Utils/axiosConfig'
import { VGap } from '../../../CustomElements/Gaps/Gap'
import useToast from '../../../customHooks/useToast'

const ForgotPassword = () => {

    const { setToast } = useToast()
    const handleEmailEnter = async (e) => {

        e.preventDefault()


        const email = e.target.email.value

        if(email.trim().length == 0){
            setToast({message: 'Please enter a valid email!', type: 'error', position: 'bottom-center'})
            return
        }

        try {
            const res = await axiosp.post('/user/forget_password/', {
                email: email
            })
            setToast({ type: 'success', message: 'Email sent successfully!', position: 'bottom-center' })
            console.log(res.data, "status:", res.status)
        } catch (err) {

            if (err.response.status == 404) {
                //user not found
                setToast({ type: 'error', message: 'No user exists with the provided email!', position: 'bottom-center' })
            }
            return 
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
                    background: 'var(--color-info-light)',
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