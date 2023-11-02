import { Button, TextField } from '@mui/material'
import React from 'react'
import './AddCandidate.css'
import { TextFieldGroupContainer } from '../../CustomElements/Containers/TexFieldGroupContainer'
import { DatePicker } from '@mui/x-date-pickers'

const AddCandidate = () => {
    return (


        <div className='parent'>

            <div style={{ width: '50%' }}>

                <div className='card'>

                    <h3>Add Candidate Details</h3>

                    <TextFieldGroupContainer cols='1fr 3fr 3fr'>
                        <TextField variant='outlined' size='small' label='Mr.' />
                        <TextField variant='outlined' size='small' label='First Name' />
                        <TextField variant='outlined' size='small' label='Last Name' />
                    </TextFieldGroupContainer>


                    <TextFieldGroupContainer cols='3fr 1fr'>

                        <TextField variant='outlined' size='small' label='Legal Full Name' />
                        <TextField variant='outlined' size='small' label='Suffix' />

                    </TextFieldGroupContainer>

                    <TextFieldGroupContainer cols='1fr 1fr'>
                        <TextField variant='outlined' size='small' label='Primary Email' />
                        <TextField variant='outlined' size='small' label='Secondary Email' />
                    </TextFieldGroupContainer>


                    <TextFieldGroupContainer cols='1fr 1fr'>
                        <TextField variant='outlined' size='small' label='Address Line 1' />
                        <TextField variant='outlined' size='small' label='Address Line 2' />
                    </TextFieldGroupContainer>
                    <TextFieldGroupContainer cols='1fr 1fr 1fr 1fr'>

                        <TextField variant='outlined' size='small' label='State' />
                        <TextField variant='outlined' size='small' label='City' />
                        <TextField variant='outlined' size='small' label='Zip Code' />
                        <TextField variant='outlined' size='small' label='Country' />
                    </TextFieldGroupContainer>
                    <TextFieldGroupContainer cols='1fr 1fr 1fr'>
                        <TextField variant='outlined' size='small' label='Phone (Personal)' />
                        <TextField variant='outlined' size='small' label='Phone (Home)' />
                        <TextField variant='outlined' size='small' label='Phone (Work)' />

                    </TextFieldGroupContainer>
                    <TextFieldGroupContainer cols='3fr 1fr 3fr 1fr'>
                        <TextField variant='outlined' size='small' label='Test' />
                        <TextField variant='outlined' size='small' label='Test' />
                        <TextField variant='outlined' size='small' label='Test' />
                        <TextField variant='outlined' size='small' label='Test' />
                    </TextFieldGroupContainer>

                    <Button variant='outlined'
                    >
                        Reset Fields

                    </Button>
                    <Button variant='contained'
                    >
                        Add Candidate

                    </Button>
                </div>

            </div>
            <div style={{ width: '50%' }}>

                <div className='card'>

                    <h3>Pay Details</h3>

                    <TextFieldGroupContainer cols='1fr 1fr 1fr'>
                        <DatePicker  slotProps={{ textField: { size: 'small' } }} label="Start Date" />
                        <DatePicker  slotProps={{ textField: { size: 'small' } }} label="End Date" />
                        <TextField variant='outlined' size='small' type='text' label='JobDiva ID' />
                    </TextFieldGroupContainer>


                    <TextFieldGroupContainer cols='1fr 2fr'>

                        <TextField variant='outlined' size='small' label='Customer Ref No' />
                        <TextField variant='outlined' size='small' label='Purchase Order No' />

                    </TextFieldGroupContainer>

                    <TextFieldGroupContainer cols='1fr 1fr'>
                        <TextField variant='outlined' size='small' label='Job Title' />
                        <TextField variant='outlined' size='small' label='Employment Cateogry' />
                    </TextFieldGroupContainer>

                    <TextFieldGroupContainer cols='3fr 1fr 3fr 1fr'>
                        <TextField variant='outlined' size='small' label='Pay Rate' />
                        <TextField variant='outlined' size='small' label='H' />
                        <TextField variant='outlined' size='small' label='Payment Frequency' />
                        <TextField variant='outlined' size='small' label='H' />
                    </TextFieldGroupContainer>

                    <TextFieldGroupContainer cols='3fr 1fr 3fr 1fr'>
                        <TextField variant='outlined' size='small' label='Per Diem' />
                        <TextField variant='outlined' size='small' label='H' />
                        <TextField variant='outlined' size='small' label='Other Expenses' />
                        <TextField variant='outlined' size='small' label='H' />
                    </TextFieldGroupContainer>

                    <TextFieldGroupContainer cols='3fr 1fr 4fr'>
                        <TextField variant='outlined' size='small' label='Outside Comissions' />
                        <TextField variant='outlined' size='small' label='H' />
                        <TextField variant='outlined' size='small' label='Pay Roll ID' />
                    </TextFieldGroupContainer>

                    <Button variant='outlined'
                    >
                        Reset Fields

                    </Button>
                    <Button variant='contained'
                    >
                        Approve

                    </Button>


                </div>

            </div>

        </div>
    )
}

export default AddCandidate