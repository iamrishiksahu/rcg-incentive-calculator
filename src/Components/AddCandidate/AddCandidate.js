import { Button, TextField, Box, Autocomplete, } from '@mui/material'
import './AddCandidate.css'
import { TextFieldGroupContainer } from '../../CustomElements/Containers/TexFieldGroupContainer'
import { DatePicker } from '@mui/x-date-pickers'
import { useRef } from 'react'
import axiosp from '../../Utils/axiosConfig'
import {  PayUnit } from '../../Utils/constants'
const AddCandidate = () => {


    const refStartDate = useRef()

    const performFormValidations = (e) => {

        try {


            const data = {

                suffix: '',
                first_name: e.target.first_name.value,
                middle_name: e.target.middle_name.value,
                last_name: e.target.last_name.value,

                official_email: e.target.primary_email.value,
                personal_email: e.target.secondary_email.value,
                address1: e.target.add_line_1.value,
                address2: e.target.add_line_1.value,
                state: e.target.state.value,
                city: e.target.city.value,
                pin_code: e.target.zip.value,
                country: e.target.country.value,
                personal_mobile_number: e.target.personal_phone.value,
                Emergency_mobile_number: e.target.secondary_phone.value,

                start_date: refStartDate.current.value,
                job_title: e.target.job_title.value,

                currency: e.target.currency.value,
                employment_category: e.target.employment_category.value,
                pay_rate: e.target.pay_rate.value,
                pay_rate_choices: e.target.pay_unit.value,
                linkedin: e.target.linkedin.value,
                gitlab: e.target.github.value,
                personal_website: e.target.website.value,
                stackoverflow: e.target.stackoverflow.value,

            }

            console.log(data)
            return data
            
        } catch (err) {
            console.log(err)
        }


    }


    const handleSubmitClick = async (e) => {
        e.preventDefault()

        const data = performFormValidations(e)

        try {
            const res = await axiosp.post('/add_candidate_and_send_credentials/', data);
            console.log(res);
            if (res.status == 201) {
                alert('Successfully Added Candidate!')
            } else {
                alert('Failed!')
            }
        } catch (err) {
            console.log(err)
        }


    }

    return (

        <form className='parent' onSubmit={handleSubmitClick} >

            <div className='card'>

                <h3>Add Candidate Details</h3>

                <TextFieldGroupContainer cols='1fr 1fr 1fr'>

                    <TextField name='first_name' variant='outlined' size='small' label='First Name' />
                    <TextField name='middle_name' variant='outlined' size='small' label='Middle Name' />
                    <TextField name='last_name' variant='outlined' size='small' label='Last Name' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField name='primary_email' type='email' variant='outlined' size='small' label='Official Email' />
                    <TextField name='secondary_email' type='email' variant='outlined' size='small' label='Personal Email' />
                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField name='add_line_1' variant='outlined' size='small' label='Address Line 1' />
                    <TextField name='add_line_2' variant='outlined' size='small' label='Address Line 2' />
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr 1fr 1fr'>

                    <TextField name='state' variant='outlined' size='small' label='State' />
                    <TextField name='city' variant='outlined' size='small' label='City' />
                    <TextField name='zip' type='number' variant='outlined' size='small' label='Zip Code' />
                    <TextField name='country' variant='outlined' size='small' label='Country' />
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField name='personal_phone' type='number' variant='outlined' size='small' label='Personal Phone' />
                    <TextField name='secondary_phone' type='number' variant='outlined' size='small' label='Emergency Phone' />
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr'>
                    <TextField name='linkedin' type='text' variant='outlined' size='small' label='LinkedIn Profile' />
                    <TextField name='stackoverflow' type='text' variant='outlined' size='small' label='Stack Overflow Profile' />
                    <TextField name='github' type='text' variant='outlined' size='small' label='GitHub Profile' />
                    <TextField name='website' type='text' variant='outlined' size='small' label='Personal Website' />
                </TextFieldGroupContainer>

            </div>


            <div className='card'>

                <h3>Job Details</h3>

                <TextFieldGroupContainer cols='1fr 1fr'>
                    <DatePicker inputRef={refStartDate} format='YYYY-MM-DD' slotProps={{ textField: { size: 'small' } }} label="Start Date" />

                    <TextField name='employment_category' variant='outlined' size='small' label='Employment Cateogry' />

                  
                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='1fr'>
                    <TextField name='job_title' variant='outlined' size='small' label='Job Title' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 2fr 1fr'>
                    <TextField name='currency' variant='outlined' size='small' label='Currency' />

                    <TextField name='pay_rate' variant='outlined' size='small' label='Pay Rate' />
                    <Autocomplete
                        disablePortal
                        options={PayUnit}
                        renderInput={(params) => <TextField {...params} ariant='outlined' size='small' name='pay_unit' label="Unit" />}
                    />
                   
                </TextFieldGroupContainer>
              

            </div>


            <Box sx={{
                display: 'flex',
                gap: '1rem'
            }}>
                <Button variant='outlined'
                >
                    Reset Fields

                </Button>
                <Button variant='contained'
                    type='submit'
                >
                    Submit

                </Button>


            </Box>
        </form>

    )
}

export default AddCandidate