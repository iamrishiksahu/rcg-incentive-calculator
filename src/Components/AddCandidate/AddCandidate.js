import { TextField } from '@mui/material'
import React from 'react'
import './AddCandidate.css'

const AddCandidate = () => {
    return (
        <div className='parent'>

            <div className='card'>

                <h3>Add Candidate Details</h3>
                <TextField variant='outlined' size='small' label='Mr.'
                    sx={{
                        width: '7rem',

                    }} />
                <TextField variant='outlined' size='small' label='First Name'
                    sx={{
                        width: '20rem',

                    }} />
                <TextField variant='outlined' size='small' label='Last Name' sx={{
                        width: '21rem',
                    }}/>



                <TextField variant='outlined' size='small' label='Legal Full Name'
                    sx={{
                        width: '32rem',
                        }} />
                <TextField variant='outlined' size='small' label='Suffix' sx={{
                        width: '17rem',
                    }}/>


                <TextField variant='outlined' size='small' label='Primary Email'
                    sx={{
                        width: '24.5rem',
                        }} />
                <TextField variant='outlined' size='small' label='Secondary Email' sx={{
                        width: '24.5rem',
                    }}/>



                <TextField variant='outlined' size='small' label='Address Line 1'
                    sx={{
                        width: '24.5rem',
                        }} />
                <TextField variant='outlined' size='small' label='Address Line 2' sx={{
                        width: '24.5rem',
                    }}/>



                <TextField variant='outlined' size='small' label='State'
                    sx={{
                        width: '11.75rem',
                        }} />
                <TextField variant='outlined' size='small' label='City'
                    sx={{
                        width: '11.75rem',
                        }} />
                <TextField variant='outlined' size='small' label='Zip Code'
                    sx={{
                        width: '11.75rem',
                        }} />
                <TextField variant='outlined' size='small' label='Country' sx={{
                        width: '11.75rem',
                    }}/>



                <TextField variant='outlined' size='small' label='Phone (Personal)'
                    sx={{
                        width: '11.75rem',
                        }} />
                <TextField variant='outlined' size='small' label='Phone (Home)'
                    sx={{
                        width: '11.75rem',
                        }} />
                <TextField variant='outlined' size='small' label='Phone (Work)' sx={{
                        width: '11.75rem',
                    }}/>


                <TextField variant='outlined' size='small' label='Test' />
                <TextField variant='outlined' size='small' label='Test' />
                <TextField variant='outlined' size='small' label='Test' />
                <TextField variant='outlined' size='small' label='Test' />
            </div>
        </div>
    )
}

export default AddCandidate