import React, { useRef, useState } from 'react'
import { Button, TextField, Autocomplete, FormControlLabel, Checkbox} from '@mui/material'
// import './AddAssignment.css'
import { TextFieldGroupContainer } from '../../../CustomElements/Containers/TexFieldGroupContainer';

import { WorkLocationList } from '../../../Utils/constants';


const AAWorkingAddress = ({ setFormData, handleNext, handleBack }) => {

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

    const handleContinue = async () => {
        await setFormData((d) => { return { ...d, data: 'sadf' } })
        handleNext()
    }



    return (
        <div className='card'>

            {/* <h3>Candidate Details</h3> */}


            <TextFieldGroupContainer cols='1fr'>
                <FormControlLabel sx={{ color: 'var(--color-info-dark)' }} control={<Checkbox defaultChecked inputRef={refBillingAddressSameAsWorkingAddress} />} label="Billing Address Same as Working Address" />

            </TextFieldGroupContainer>

            <TextFieldGroupContainer cols='1fr 1fr'>

                <Autocomplete
                    disablePortal
                    options={WorkLocationList}
                    renderInput={(params) => <TextField {...params} ariant='outlined' size='small' inputRef={refWorkingLocation} label="Work Location" />}
                />
                <TextField inputRef={refWorkingCountry} variant='outlined' size='small' label='Country' />
            </TextFieldGroupContainer>



            <TextFieldGroupContainer cols='1fr 1fr'>
                <TextField inputRef={refWorkingAddressLine1} variant='outlined' size='small' label='Address Line 1' />
                <TextField inputRef={refWorkingAddressLine2} variant='outlined' size='small' label='Address Line 2' />
            </TextFieldGroupContainer>

            <TextFieldGroupContainer cols='1fr 1fr 1fr'>
                <TextField inputRef={refWorkingCity} variant='outlined' size='small' label='City' />
                <TextField inputRef={refWorkingState} variant='outlined' size='small' label='State' />
                <TextField inputRef={refPinCode} type='number' variant='outlined' size='small' label='Pin Code' />

            </TextFieldGroupContainer>

      
            <TextFieldGroupContainer cols='1fr 1fr 5fr'>

                <Button variant='contained' onClick={handleContinue}>
                    Continue
                </Button>
                <Button onClick={handleBack}>
                    Back
                </Button>

            </TextFieldGroupContainer>

        </div>
    )
}

export default AAWorkingAddress