import React, { useEffect, useRef, useState } from 'react'
import { Button, TextField, Autocomplete, FormControlLabel, Checkbox } from '@mui/material'
// import './AddAssignment.css'
import { TextFieldGroupContainer } from '../../../CustomElements/Containers/TexFieldGroupContainer';

import { WorkLocationList } from '../../../Utils/constants';

import countryStateData from '../../../Utils/countryStateData.json'


const AAWorkingAddress = ({ formData, setFormData, handleNext, handleBack }) => {

    const refWeekEnding = useRef();
    const refHoursDay = useRef();
    const refWorkingLocation = useRef();
    const refWorkingAddressLine1 = useRef();
    const refWorkingAddressLine2 = useRef();
    const refWorkingCity = useRef();
    const refPinCode = useRef();
    const refWorkingState = useRef();
    const refWorkingCountry = useRef();
    const refPaymentTerms = useRef();
    const refDays = useRef();
    const refPassThrough = useRef();
    const refPassDiscount = useRef();
    const refBillingAddressSameAsWorkingAddress = useRef();

    const [statesList, setStatesList] = useState([])
    const [countryList, setCountryList] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [selectedState, setSelectedState] = useState(null)

    const handleContinue = async (e) => {
        e.preventDefault()

        const data = {
            Billing_Address_same_as_working_address: e.target.billing_add_same.value ,
            working_location: e.target.working_location.value ,
            working_address_1: e.target.address_line_1.value ,
            working_address_2: e.target.address_line_2.value ,
            working_city: e.target.city.value ,	
            pin_code: e.target.pin.value ,	
            working_state: e.target.state.value ,
            working_country: e.target.working_country.value ,	
           
        }
        await setFormData((d) => { return { ...d, working_address: data } })
        handleNext()
    }


    const loadCountryDropDown = async () => {
        const countryArray = []

        countryStateData.map((item, key) => {
            countryArray.push(item.country_name)
        })

        setCountryList(countryArray)
    }

    const loadStatesOfSelectedCountry = () => {

        if(selectedCountry == null) {return}
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
        setSelectedState(null)
    }, [selectedCountry])



    return (
        <form noValidate onSubmit={handleContinue}>
            <div className='card'>

                {/* <h3>Candidate Details</h3> */}


                <TextFieldGroupContainer cols='1fr'>
                    <FormControlLabel sx={{ color: 'var(--color-info-dark)' }} control={<Checkbox name='billing_add_same' defaultChecked inputRef={refBillingAddressSameAsWorkingAddress} />} label="Billing Address Same as Working Address" />

                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 1fr'>

                    <Autocomplete
                        disablePortal
                        options={WorkLocationList}
                        renderInput={(params) => <TextField {...params} name='working_location' ariant='outlined' size='small' inputRef={refWorkingLocation} label="Work Location" />}
                    />
                    <Autocomplete
                        disablePortal
                        options={countryList}
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.currentTarget.textContent)}
                        renderInput={(params) => <TextField {...params} ariant='outlined' name='working_country' size='small' inputRef={refWorkingCountry} label="Country" />}
                    />
                    {/* <TextField inputRef={refWorkingCountry} variant='outlined' size='small' label='Country' /> */}
                </TextFieldGroupContainer>



                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField inputRef={refWorkingAddressLine1} variant='outlined' name='address_line_1' size='small' label='Address Line 1' />
                    <TextField inputRef={refWorkingAddressLine2} variant='outlined' name='address_line_2' size='small' label='Address Line 2' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 1fr 1fr'>
                    <TextField inputRef={refWorkingCity} variant='outlined' size='small' name='city' label='City' />
                    <Autocomplete
                        disablePortal
                        // disabled={statesList.length == 0}
                        options={statesList}
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.currentTarget.textContent)}
                        renderInput={(params) => <TextField {...params} ariant='outlined' name='state' size='small' inputRef={refWorkingState} label="State" />}
                    />
                    {/* <TextField inputRef={refWorkingState} variant='outlined' size='small' label='State' /> */}
                    <TextField inputRef={refPinCode} type='number' variant='outlined' size='small' name='pin' label='Pin Code' />

                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='1fr 1fr 5fr'>

                    <Button  type='submit' variant='contained'>
                        Continue
                    </Button>
                    <Button onClick={handleBack}>
                        Back
                    </Button>

                </TextFieldGroupContainer>

            </div>
        </form>
    )
}

export default AAWorkingAddress