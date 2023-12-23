import React, { useRef, useState } from 'react'
import { Box, Button, TextField, Autocomplete, FormControlLabel, Switch, Checkbox } from '@mui/material'
// import './AddAssignment.css'
import { TextFieldGroupContainer } from '../../../CustomElements/Containers/TexFieldGroupContainer';
import { DatePicker } from '@mui/x-date-pickers';
import { DivisionsList, CurrencyList, PayFrequencyList, BillingUnitsList, WeekNameList, WeekEndingChoice } from '../../../Utils/constants';
import PurchaseOrderPopup from '../../PurchaseOrderPopup/PurchaseOrderPopup';


const AABillingDetails = ({ formData, setFormData, handleNext, handleBack }) => {


    const refPayRate = useRef();
    const refPaymentFrequency = useRef();    
    const refBillRate = useRef();
    const refCurrency = useRef();
    const refNetBill = useRef();
    const refBillingUnit = useRef();
    const refTimeSheetEntryFormat = useRef();
    const refWeekEnding = useRef();
    const refHoursDay = useRef();
    const refPaymentTerms = useRef();
    const refDays = useRef();
    const refPassThrough = useRef();
    const refPassDiscount = useRef();
    const refhoursHalfDay = useRef();
    const refMargin = useRef();

    const handleContinue = async (e) => {

        // currency	string

        const data = {

            bill_rate: e.target.bill_rate.value,	
            pay_rate: e.target.pay_rate.value,	
            net_bill: e.target.net_bill.value ,	
            margin: e.target.margin.value ,	
            timesheet_entry_format: e.target.ts_entry_format.value ,	
            frequency: e.target.pay_freq.value ,
            billing_units: e.target.billing_unit.value ,
            week_ending: e.target.week_ending.value ,	
            hours_day: e.target.hours_per_day.value ,	
            hours_half_day: e.target.hours_per_half_day.value ,
            payment_terms: e.target.payment_terms.value ,	
            pass_through: e.target.pass_through.value ,
            pass_discount: e.target.pass_discount.value ,
            days: e.target.days.value ,	

        }
        await setFormData((d) => { return { ...d, billing_details: data } })
        handleNext()
    }



    return (
        <form  noValidate onSubmit={handleContinue}>
            <div className='card'>

                {/* <h3>Candidate Details</h3> */}

                <Box sx={{
                    display: 'flex',
                    gap: '2rem',
                }}>

                    <FormControlLabel sx={{
                        mt: '-1rem'
                    }} control={<Switch defaultChecked />} label="Approve" />
                </Box>





                <TextFieldGroupContainer cols='1fr 1fr'>

                    <Autocomplete
                        disablePortal
                        options={CurrencyList}
                        renderInput={(params) => <TextField {...params} ariant='outlined' name='currency' size='small' inputRef={refCurrency} label="Currency" />}
                    />


                    <Autocomplete
                        disablePortal
                        options={BillingUnitsList}
                        renderInput={(params) => <TextField {...params} ariant='outlined' name='billing_unit' size='small' inputRef={refBillingUnit} label="Billing Units" />}
                    />
                </TextFieldGroupContainer>




                <TextFieldGroupContainer cols='1fr 1fr 1fr'>
                    <Autocomplete
                        disablePortal
                        options={WeekEndingChoice}
                        defaultValue={WeekNameList[0]}
                        renderInput={(params) => <TextField {...params} ariant='outlined' name='week_ending' size='small' inputRef={refWeekEnding} label="Week Ending" />}
                    />
                    <TextField required inputRef={refHoursDay} variant='outlined' name='hours_per_day' size='small' label='Hours / Day' />
                    <TextField required inputRef={refhoursHalfDay} variant='outlined' name='hours_per_half_day' size='small' label='Hours / Half Day' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 1fr 1fr'>

                    <TextField required inputRef={refBillRate} type='number' variant='outlined' name='bill_rate' size='small' label='Bill Rate' />
                    <TextField required inputRef={refPayRate} type='number' variant='outlined' name='pay_rate' size='small' label='Pay Rate' />
                    <TextField required inputRef={refNetBill} type='number' variant='outlined' name='net_bill' size='small' label='Net Bill' />

                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr'>

                    <Autocomplete
                        disablePortal
                        options={PayFrequencyList}
                        renderInput={(params) => <TextField {...params} ariant='outlined' name='pay_freq' size='small' inputRef={refPaymentFrequency} label="Frequency" />}
                    />
                    <TextField required inputRef={refMargin} variant='outlined' name='margin' size='small' label='Margin' />

                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='1fr 1fr 1fr'>

                    <TextField required inputRef={refDays} variant='outlined' name='days' size='small' label='Days' />
                    <FormControlLabel control={<Checkbox inputRef={refPassThrough} defaultChecked name='pass_through' />} label="Pass Through" />
                    <FormControlLabel control={<Checkbox inputRef={refPassDiscount} defaultChecked name='pass_discount' />} label="Pass Discount" />
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr'>

                    <TextField required inputRef={refTimeSheetEntryFormat} variant='outlined' name='ts_entry_format' size='small' label='Timesheet Entry Format' />
                    <TextField required inputRef={refPaymentTerms} type='number' variant='outlined' name='payment_terms' size='small' label='Payment Terms' />
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr 5fr'>

                    <Button variant='contained' type='submit'>
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

export default AABillingDetails