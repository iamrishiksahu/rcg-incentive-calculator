import React, { useRef, useState } from 'react'
import { Button, TextField, Autocomplete } from '@mui/material'
// import './AddAssignment.css'
import { TextFieldGroupContainer } from '../../../CustomElements/Containers/TexFieldGroupContainer';

import { DatePicker } from '@mui/x-date-pickers';
import { DivisionsList, CurrencyList } from '../../../Utils/constants';
import PurchaseOrderPopup from '../../PurchaseOrderPopup/PurchaseOrderPopup';


const AACandidateDetails = ({setFormData, handleNext, handleBack}) => {

    const refStartDate = useRef();
    const refEndDate = useRef();
    const refJobdivaID = useRef();
    const refCustomerReferenceNo = useRef();
    const refPurchaseOrderNo = useRef();
    const refJobTitle = useRef();
    const refDivision = useRef();
    const refBillingContact = useRef();
    const refClientContact = useRef();
    const refBillingCompanyAddress = useRef();
    const refBillingCompanyName = useRef();
    const [open, setOpen] = useState(false)
    const [purchaseOrderData, setPurchaseOrderData] = useState({})

    const handleContinue = async () => {
        await setFormData((d) => {return {...d, data: 'sadf'} } )
        handleNext()
    }

  

    return (
        <div className='card'>

            {/* <h3>Candidate Details</h3> */}


            <TextFieldGroupContainer cols='1fr 1fr 1fr'>
                <DatePicker inputRef={refStartDate} format='YYYY-MM-DD' slotProps={{ textField: { size: 'small' } }} label="Start Date" />
                <DatePicker inputRef={refEndDate} format='YYYY-MM-DD' slotProps={{ textField: { size: 'small' } }} label="End Date" />
                <TextField inputRef={refJobdivaID} variant='outlined' size='small' type='text' label='JobDiva ID' />
            </TextFieldGroupContainer>

            <TextFieldGroupContainer cols='1fr 2.1fr'>

                <TextField inputRef={refCustomerReferenceNo} variant='outlined' size='small' label='Customer Ref No' />


                <TextField inputRef={refJobTitle} variant='outlined' size='small' label='Job Title' />
            </TextFieldGroupContainer>

            <TextFieldGroupContainer cols='1fr 1fr'>

                <Autocomplete
                    disablePortal
                    options={DivisionsList}
                    renderInput={(params) => <TextField {...params} ariant='outlined' size='small' inputRef={refDivision} label="Division" />}
                />
                <Autocomplete
                    disablePortal
                    options={CurrencyList}
                    renderInput={(params) => <TextField {...params} ariant='outlined' size='small' inputRef={refDivision} label="Currency" />}
                />

            </TextFieldGroupContainer>


            <TextFieldGroupContainer cols='1fr 1fr'>

                <TextField inputRef={refBillingContact} variant='outlined' size='small' label='Billing Contact' />
                <TextField inputRef={refClientContact} variant='outlined' size='small' label='Client Contact' />

            </TextFieldGroupContainer>

            <TextFieldGroupContainer cols='1fr'>
                <TextField inputRef={refBillingCompanyName} variant='outlined' size='small' label='Billing Company Name' />
                <TextField inputRef={refBillingCompanyAddress} variant='outlined' size='small' label='Billing Company Name' />
            </TextFieldGroupContainer>

            <TextFieldGroupContainer cols='8fr 1fr'>


                <TextField required inputRef={refPurchaseOrderNo} variant='outlined' size='small' label='Purchase Order No' />
                <Button variant='outlined'
                    onClick={() => setOpen(true)}>+</Button>

            </TextFieldGroupContainer>
            <TextFieldGroupContainer cols='1fr 1fr 5fr'>

            <Button variant='contained' onClick={handleContinue}>
                Continue
            </Button>
            <Button  onClick={handleBack}>
                Back
            </Button>

            </TextFieldGroupContainer>

            
            <PurchaseOrderPopup open={open} setOpen={setOpen} setPurchaseOrderData={setPurchaseOrderData} />



        </div>
    )
}

export default AACandidateDetails