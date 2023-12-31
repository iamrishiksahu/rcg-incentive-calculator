import { Button, TextField, Box, Autocomplete, } from '@mui/material'
import './AddCandidate.css'
import { useEffect, useState } from 'react'
import { TextFieldGroupContainer } from '../../CustomElements/Containers/TexFieldGroupContainer'
import { DatePicker } from '@mui/x-date-pickers'
import { useRef } from 'react'
import axiosp from '../../Utils/axiosConfig'
import { CurrencyList, EmploymentCategoryList, PayUnit, UserRoles } from '../../Utils/constants'
import usePageTitle from '../../hooks/usePageTitle'
import useToast from '../../customHooks/useToast'
import countryStateData from '../../Utils/countryStateData.json'

const AddCandidate = () => {


    const refStartDate = useRef()

    const { setToast } = useToast()

    const [statesList, setStatesList] = useState([])
    const [countryList, setCountryList] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [selectedState, setSelectedState] = useState(null)


    const loadCountryDropDown = async () => {
        const countryArray = []

        countryStateData.map((item, key) => {
            countryArray.push(item.country_name)
        })

        setCountryList(countryArray)
    }

    const loadStatesOfSelectedCountry = () => {

        if (selectedCountry == null) { return }
        const statesArray = []
        try {
            const data = countryStateData.find(item => item.country_name == selectedCountry)
            data.states.map((item, key) => {
                statesArray.push(item.state_name)
            })
            setStatesList(statesArray)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadCountryDropDown()
    }, [])
    useEffect(() => {
        loadStatesOfSelectedCountry()
        setSelectedState('')
    }, [selectedCountry])



    const performFormValidations = (e) => {

        try {


            const data = {
                suffix: '',
                first_name: e.target.first_name.value,
                middle_name: e.target.middle_name.value,
                last_name: e.target.last_name.value,
                email: e.target.primary_email.value,
                email2: e.target.secondary_email.value,
                address1: e.target.add_line_1.value,
                address2: e.target.add_line_1.value,
                state: e.target.state.value,
                city: e.target.city.value,
                pin_code: parseInt(e.target.zip.value),
                country: e.target.country.value,
                personal_mobile_number: e.target.personal_phone.value,
                emergency_mobile_number: e.target.secondary_phone.value,
                role: e.target.user_role.value,
                start_date: refStartDate.current.value,
                job_title: e.target.job_title.value,
                currency: e.target.currency.value,
                employment_category: e.target.employment_category.value,
                pay_rate: e.target.pay_rate.value,
                pay_rate_choices: e.target.pay_unit.value,
                linkedin_profile_id: e.target.linkedin.value,
                gitlab: e.target.github.value,
                personal_website: e.target.website.value,
                stackoverflow: e.target.stackoverflow.value,
                reporting_manager: e.target.reporting_manager.value,
            }
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

        const reqbody = performFormValidations(e)

        try {
            const res = await axiosp.post('/candidate_details/add_candidate_details_and_send_credentials/', reqbody);
            console.log(res);
            if (res.status == 201) {
                setToast({ message: 'Candidate added successfully and login credentials sent via email!', timeout: 6000 })
            } else {
                setToast({ message: 'Candidate addition failed!' })
            }
        } catch (err) {
            console.log(err)
            setToast({ message: 'Error occured while adding candidate!', type: 'error' })

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

                    <Autocomplete
                        disablePortal
                        options={countryList}
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.currentTarget.textContent)}
                        renderInput={(params) => <TextField {...params} ariant='outlined' name='country' size='small'  label="Country" />}
                    />
                     <Autocomplete
                        disablePortal
                        options={statesList}
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.currentTarget.textContent)}
                        renderInput={(params) => <TextField {...params} ariant='outlined' name='state' size='small' label="State" />}
                    />
                    <TextField required name='city' variant='outlined' size='small' label='City' />
                    <TextField required name='zip' inputProps={{ maxLength: 6, minLength: 6 }} type='tel' variant='outlined' size='small' label='Zip Code' />
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

                    {/* <TextField required name='employment_category' variant='outlined' size='small' label='Employment Cateogry' /> */}
                    <Autocomplete
                        disablePortal
                        options={EmploymentCategoryList}
                        renderInput={(params) => <TextField required {...params} ariant='outlined' size='small' name='employment_category' label="Employment Category" />}
                    />

                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr'>
                    <TextField required name='job_title' variant='outlined' size='small' label='Job Title' />

                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='1fr 1fr'>

                    <Autocomplete
                        disablePortal
                        options={UserRoles}
                        renderInput={(params) => <TextField required {...params} ariant='outlined' size='small' name='user_role' label="Role" />}
                    />

                    <TextField required name='reporting_manager' variant='outlined' size='small' label='Reporting Manager' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 2fr 1fr'>
                    {/* <TextField required name='currency' variant='outlined' size='small' label='Currency' /> */}
                    <Autocomplete
                        disablePortal
                        options={CurrencyList}
                        renderInput={(params) => <TextField {...params} ariant='outlined' size='small' name='currency' label="Currency" />}
                    />
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