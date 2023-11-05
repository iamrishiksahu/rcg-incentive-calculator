import React, { useRef } from 'react'
import { Button, TextField, Autocomplete, Box } from '@mui/material'
import './AddAssignment.css'
import { TextFieldGroupContainer } from '../../CustomElements/Containers/TexFieldGroupContainer'
import { DatePicker } from '@mui/x-date-pickers'
import { DivisionsList } from '../../Utils/constants'


const AddAssignment = () => {
    

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
    const refAddressLine1 = useRef();
    const refAddressLine2 = useRef();
    const refPayRate = useRef();
    const refPayRateUnit = useRef();
    const refPaymentFrequency = useRef();
    const refPaymentFrequencyUnit = useRef();
    const refPerDiem = useRef();
    const refPerDiemUnit = useRef();
    const refOtherExpenses = useRef();
    const refOtherExpensesUnit = useRef();
    const refOutsideCommissions = useRef();
    const refOutsideCommissionsUnit = useRef();
    const refPayRollID = useRef();
    const refBillRate = useRef();
    const refBillRateCurrency = useRef();
    const refDefaultDiscount = useRef();
    const refDefaultDiscountUnit = useRef();
    const refOverTime = useRef();
    const refDoubleTime = useRef();

    const handleSubmitClick = (e) => {
        e.preventDefault()

    }

    return (
        <div className='parent'>

            <div className='card'>

                <h3>Billing Details</h3>


                <TextFieldGroupContainer cols='1fr 1fr 1fr'>
                    <DatePicker inputRef={refStartDate} slotProps={{ textField: { size: 'small' } }} label="Start Date" />
                    <DatePicker inputRef={refEndDate} slotProps={{ textField: { size: 'small' } }} label="End Date" />
                    <TextField inputRef={refJobdivaID} variant='outlined' size='small' type='text' label='JobDiva ID' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 2fr'>

                    <TextField inputRef={refCustomerReferenceNo} variant='outlined' size='small' label='Customer Ref No' />
                    <TextField inputRef={refPurchaseOrderNo} variant='outlined' size='small' label='Purchase Order No' />

                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField inputRef={refJobTitle} variant='outlined' size='small' label='Job Title' />

                    <Autocomplete
                        disablePortal
                        options={DivisionsList}
                        renderInput={(params) => <TextField {...params} ariant='outlined' size='small' inputRef={refDivision} label="Division" />}
                    />

                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='1fr 1fr'>

                    <TextField inputRef={refBillingContact} variant='outlined' size='small' label='Billing Contact' />
                    <TextField inputRef={refClientContact} variant='outlined' size='small' label='Client Contact' />

                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr'>
                    <TextField inputRef={refBillingCompanyName} variant='outlined' size='small' label='Billing Company Name' />
                    <TextField inputRef={refBillingCompanyAddress} variant='outlined' size='small' label='Billing Company Address' />
                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField inputRef={refAddressLine1} variant='outlined' size='small' label='Address Line 1' />
                    <TextField inputRef={refAddressLine2} variant='outlined' size='small' label='Address Line 2' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='3fr 1fr 3fr 1fr'>
                    <TextField inputRef={refPayRate} variant='outlined' size='small' label='Pay Rate' />
                    <TextField inputRef={refPayRateUnit} variant='outlined' size='small' label='H' />
                    <TextField inputRef={refPaymentFrequency} variant='outlined' size='small' label='Payment Frequency' />
                    <TextField inputRef={refPaymentFrequencyUnit} variant='outlined' size='small' label='H' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='3fr 1fr 3fr 1fr'>
                    <TextField inputRef={refPerDiem} variant='outlined' size='small' label='Per Diem' />
                    <TextField inputRef={refPerDiemUnit} variant='outlined' size='small' label='H' />
                    <TextField inputRef={refOtherExpenses} variant='outlined' size='small' label='Other Expenses' />
                    <TextField inputRef={refOtherExpensesUnit} variant='outlined' size='small' label='H' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='3fr 1fr 4fr'>
                    <TextField inputRef={refOutsideCommissions} variant='outlined' size='small' label='Outside Comissions' />
                    <TextField inputRef={refOutsideCommissionsUnit} variant='outlined' size='small' label='H' />
                    <TextField inputRef={refPayRollID} variant='outlined' size='small' label='Pay Roll ID' />
                </TextFieldGroupContainer>

            </div>



            <div className='card'>

                <h3>Additional Details</h3>


                <TextFieldGroupContainer cols='5fr 2fr'>

                    <TextField inputRef={refBillRate} variant='outlined' size='small' label='Bill Rate' />
                    <TextField inputRef={refBillRateCurrency} variant='outlined' size='small' label='Currency' />

                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='3fr 1fr 3fr 1fr'>
                    <TextField variant='outlined' size='small' label='Bill Rate' />
                    <TextField variant='outlined' size='small' label='/ H' />
                    <TextField inputRef={refDefaultDiscount} variant='outlined' size='small' label='Default Discount' />
                    <TextField inputRef={refDefaultDiscountUnit} variant='outlined' size='small' label='/ H' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField inputRef={refOverTime} variant='outlined' size='small' label='Over Time' />
                    <TextField inputRef={refDoubleTime} variant='outlined' size='small' label='Double Time' />
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
                    onClick={handleSubmitClick}

                >
                    Submit

                </Button>


            </Box>




        </div>
    )
}

export default AddAssignment

