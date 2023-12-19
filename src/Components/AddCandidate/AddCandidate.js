import { Button, TextField, Box, Autocomplete, } from '@mui/material'
import './AddCandidate.css'
import { useEffect, useState } from 'react'
import { TextFieldGroupContainer } from '../../CustomElements/Containers/TexFieldGroupContainer'
import { DatePicker } from '@mui/x-date-pickers'
import { useRef } from 'react'
import axiosp from '../../Utils/axiosConfig'
import { PayUnit, UserRoles } from '../../Utils/constants'
import usePageTitle from '../../hooks/usePageTitle'
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
                user_role: e.target.user_role.value,
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
                reporting_manager: e.target.reporting_manager.value,

            }

            console.log(data)

            return data

        } catch (err) {
            console.log(err)
        }


    }

    const resetFields = (e) => {
        e.target.reset()
    }

    const handleSubmitClick = async (e) => {
        e.preventDefault()

        const data = performFormValidations(e)

        try {
            const res = await axiosp.post('/candidate_details/add_candidate_and_send_credentials/', data);
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

    const { setTitleProps } = usePageTitle()

    useEffect(() => {
        setTitleProps({ title: 'Add Candidate' })
    }, [])
    return (

        <form className='as' onSubmit={handleSubmitClick} onReset={resetFields} >

            <div className='card' style={{
                // boxShadow: 'var(--shadow-card-1)',
            }}>

                <h3>Candidate Details</h3>

                <TextFieldGroupContainer cols='1fr 1fr 1fr'>

                    <TextField required name='first_name' variant='outlined' size='small' label='First Name' />
                    <TextField name='middle_name' variant='outlined' size='small' label='Middle Name' />
                    <TextField required name='last_name' variant='outlined' size='small' label='Last Name' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField required name='primary_email' type='email' variant='outlined' size='small' label='Official Email' />
                    <TextField required name='secondary_email' type='email' variant='outlined' size='small' label='Personal Email' />
                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField required name='add_line_1' variant='outlined' size='small' label='Address Line 1' />
                    <TextField name='add_line_2' variant='outlined' size='small' label='Address Line 2' />
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr 1fr 1fr'>

                    <TextField required name='state' variant='outlined' size='small' label='State' />
                    <TextField required name='city' variant='outlined' size='small' label='City' />
                    <TextField required name='zip' type='number' variant='outlined' size='small' label='Zip Code' />
                    <TextField required name='country' variant='outlined' size='small' label='Country' />
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField required name='personal_phone' type='number' variant='outlined' size='small' label='Personal Phone' />
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
                    <DatePicker required inputRef={refStartDate} format='YYYY-MM-DD' slotProps={{ textField: { size: 'small' } }} label="Start Date" />

                    <TextField required name='employment_category' variant='outlined' size='small' label='Employment Cateogry' />


                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='2fr 1fr 2fr'>
                    <TextField required name='job_title' variant='outlined' size='small' label='Job Title' />

                    <Autocomplete
                        disablePortal
                        options={UserRoles}
                        renderInput={(params) => <TextField required {...params} ariant='outlined' size='small' name='user_role' label="Role" />}
                    />

                    <TextField required name='reporting_manager' variant='outlined' size='small' label='Reporting Manager' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 2fr 1fr'>
                    <TextField required name='currency' variant='outlined' size='small' label='Currency' />

                    <TextField required name='pay_rate' variant='outlined' size='small' type='number' label='Pay Rate' />
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
                    type='reset'
                >
                    Reset Fields

                </Button>
                <Button variant='outlined'
                    type='submit'
                >
                    Submit

                </Button>


            </Box>
        </form>

    )
}

export default AddCandidate