import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import { LoginTextField } from '../../../CustomElements/TextFields/TextFields'
import { VGap } from '../../../CustomElements/Gaps/Gap'
import axiosp from '../../../Utils/axiosConfig'
import useToast from '../../../customHooks/useToast'
import { ErrorRounded } from '@mui/icons-material'

const ResetPassword = () => {

    const { uid, token } = useParams()

    const { setToast } = useToast()

    const navigate = useNavigate()

    const handleEnterHit = async (e) => {
        e.preventDefault()

        const rSmallLetters = new RegExp("^(?=.*[a-z])");
        const rCapitalLetter = new RegExp("^(?=.*[A-Z])");
        const rNumeric = new RegExp("\d");
        const rSymbol = new RegExp("^(?=.*[-+_!@#$%^&*., ?])");

        const n = e.target.new.value
        const cn = e.target.cnfnew.value

        if (n.length < 8) {
            return alert('Please enter minimum 8 characters!')
        } else if (n !== cn) {
            return alert('Please enter the same password in both fields!')
        }

        try {
            const res = await axiosp.post(`/user/reset_password/${uid}/${token}/`, {
                new_password: n,
                confirm_new_password: cn
            })

            console.log(res.data)
            setToast({ type: 'success', message: 'Password changed successfully!', timeout: 4500 })
            // Redirect to login 
            navigate('/')
        } catch (err) {
            setToast({ type: 'error', message: err?.response?.data?.details || 'Some unexpected error occurred!', timeout: 4500 })
            console.log(err)
            console.log(n, " ", cn)
        }

    }

    if (!uid || !token) {
        return (
            <>Invalid URL</>
        )
    } else {
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
                <Typography variant='h6' color={'#00000080'}>Set Your Password</Typography>

                <form onSubmit={handleEnterHit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem'
                }}>

                    <LoginTextField sx={{
                        background: '#FFEEEE50',
                        width: '300px'

                    }} name='new' icon='key' type='password' placeholder='New Password' />
                    <LoginTextField sx={{
                        background: '#FFEEEE50',
                        width: '300px'

                    }} name='cnfnew' icon='key' type='password' placeholder='Re-Type New Passowrd' />
                    <Button type={'submit'} sx={{
                        background: '#ffeeee',
                        borderRadius: '1rem',
                        fontWeight: '500',
                        fontSize: '1rem',
                        paddingX: '4rem'
                    }}>Set Password</Button>

                </form>

            </Box>

        )
    }

}

export default ResetPassword