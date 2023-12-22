import React, { useRef, useState } from 'react'
import { Button, TextField, Autocomplete } from '@mui/material'
// import './AddAssignment.css'
import { TextFieldGroupContainer } from '../../../CustomElements/Containers/TexFieldGroupContainer';

import { DatePicker } from '@mui/x-date-pickers';
import { DivisionsList, CurrencyList } from '../../../Utils/constants';
import PurchaseOrderPopup from '../../PurchaseOrderPopup/PurchaseOrderPopup';


const AACandidateDetails = ({ formData, setFormData, handleNext, handleBack }) => {

    const refStartDate = useRef();
    const refEndDate = useRef();
    const refCurrency = useRef();
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

    const handleContinue = async (e) => {
        e.preventDefault()

        const data = {
            startdate: e.target.start_date.value ,	
            enddate: e.target.end_date.value ,	
            customer_ref: e.target.cust_ref_no.value ,
            jobdiva_job: e.target.job_diva_id.value ,
            job_title: e.target.job_title.value ,	
            client_contact: e.target.client_contact.value ,	
            billing_contact: e.target.billing_contact.value ,
            billing_company: e.target.b_c_name.value ,
            billing_companu_address: e.target.b_c_add.value,
            division: e.target.division.value,
            currency: e.target.currency.value,
            purchase_order_no: e.target.po_no.value,
           

        }

        await setFormData((d) => { return { ...d, candidate_details: data } })
        handleNext()
    }



    return (
        <form noValidate onSubmit={handleContinue}>
            <div className='card'>

                {/* <h3>Candidate Details</h3> */}


                <TextFieldGroupContainer cols='1fr 1fr 1fr'>
                    <DatePicker  inputRef={refStartDate} format='YYYY-MM-DD' slotProps={{ textField: { required: true, name: 'start_date', size: 'small' } }} label="Start Date" />
                    <DatePicker inputRef={refEndDate} format='YYYY-MM-DD' slotProps={{ textField: { required: false, name: 'end_date', size: 'small' } }} label="End Date" />
                    <TextField inputRef={refJobdivaID} variant='outlined' required name='job_diva_id' size='small' type='number' label='JobDiva ID' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 2.1fr'>

                    <TextField inputRef={refCustomerReferenceNo} variant='outlined' required name='cust_ref_no' size='small' label='Customer Ref No' />


                    <TextField inputRef={refJobTitle} variant='outlined' required name='job_title' size='small' label='Job Title' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 1fr'>

                    <Autocomplete
                        disablePortal
                        options={DivisionsList}
                        renderInput={(params) => <TextField {...params} ariant='outlined' required name='division' size='small' inputRef={refDivision} label="Division" />}
                    />
                    <Autocomplete
                        disablePortal
                        options={CurrencyList}
                        renderInput={(params) => <TextField {...params} ariant='outlined' required name='currency' size='small' inputRef={refCurrency} label="Currency" />}
                    />

                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='1fr 1fr'>

                    <TextField inputRef={refBillingContact} variant='outlined'  name='billing_contact' size='small' label='Billing Contact' />
                    <TextField inputRef={refClientContact} variant='outlined' name='client_contact' size='small' label='Client Contact' />

                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr'>
                    <TextField inputRef={refBillingCompanyName} variant='outlined' required name='b_c_name' size='small' label='Billing Company Name' />
                    <TextField inputRef={refBillingCompanyAddress} variant='outlined' required name='b_c_add' size='small' label='Billing Company Address' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='8fr 1fr'>


                    <TextField required inputRef={refPurchaseOrderNo} variant='outlined'  name='po_no' size='small' label='Purchase Order No' />
                    <Button variant='outlined' onClick={() => setOpen(true)}>+</Button>

                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr 5fr'>

                    <Button variant='contained' type='submit'>
                        Continue
                    </Button>

                </TextFieldGroupContainer>


                <PurchaseOrderPopup open={open} setOpen={setOpen} setPurchaseOrderData={setPurchaseOrderData} />



            </div>
        </form>
    )
}

export default AACandidateDetails