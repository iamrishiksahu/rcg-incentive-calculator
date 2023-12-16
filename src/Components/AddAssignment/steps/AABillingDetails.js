import React, { useRef, useState } from 'react'
import { Box, Button, TextField, Autocomplete, FormControlLabel, Switch, Checkbox } from '@mui/material'
// import './AddAssignment.css'
import { TextFieldGroupContainer } from '../../../CustomElements/Containers/TexFieldGroupContainer';
import { DatePicker } from '@mui/x-date-pickers';
import { DivisionsList, CurrencyList, PayFrequencyList, BillingUnitsList, WeekNameList } from '../../../Utils/constants';
import PurchaseOrderPopup from '../../PurchaseOrderPopup/PurchaseOrderPopup';


const AABillingDetails = ({ setFormData, handleNext, handleBack }) => {

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
    const refBillingAddressSameAsWorkingAddress = useRef();
    const refDoubleTime = useRef();
    const refCurrency = useRef();
    const refNetBill = useRef();
    const refBillingUnit = useRef();
    const refTimeSheetEntryFormat = useRef();
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
    const refPrimarySalesPercent = useRef();
    const refSecondarySalesPercent = useRef();
    const refTertialSalesPercent = useRef();
    const refPrimaryRecruiterPercent = useRef();
    const refSecondaryRecruiterPercent = useRef();
    const refTertiaryRecruterPecent = useRef();
    const refhoursHalfDay = useRef();
    const refPrimarySales = useRef();
    const refSecondarySales = useRef();
    const refTertiarySales = useRef();
    const refPrimaryRecruiter = useRef();
    const refSecondaryRecruiter = useRef();
    const refMargin = useRef();
    const refTertiaryRecruiter = useRef();

    const handleContinue = async () => {
        await setFormData((d) => { return { ...d, data: 'sadf' } })
        handleNext()
    }



    return (
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
                    renderInput={(params) => <TextField {...params} ariant='outlined' size='small' inputRef={refCurrency} label="Currency" />}
                />

                
            <Autocomplete
                    disablePortal
                    options={BillingUnitsList}
                    renderInput={(params) => <TextField {...params} ariant='outlined' size='small' inputRef={refBillingUnit} label="Billing Units" />}
                />
            </TextFieldGroupContainer>




            <TextFieldGroupContainer cols='1fr 1fr 1fr'>
            <Autocomplete
                    disablePortal
                    options={WeekNameList}
                    defaultValue={WeekNameList[0]}
                    renderInput={(params) => <TextField {...params} ariant='outlined' size='small' inputRef={refWeekEnding} label="Week Ending" />}
                />
                <TextField required inputRef={refHoursDay} variant='outlined' size='small' label='Hours / Day' />
                <TextField required inputRef={refhoursHalfDay} variant='outlined' size='small' label='Hours / Half Day' />
            </TextFieldGroupContainer>

            <TextFieldGroupContainer cols='1fr 1fr'>

                <TextField required inputRef={refBillRate} variant='outlined' size='small' label='Bill Rate' />
                <TextField required inputRef={refNetBill} variant='outlined' size='small' label='Net Bill' />

            </TextFieldGroupContainer>
            <TextFieldGroupContainer cols='1fr 1fr'>

            <Autocomplete
                    disablePortal
                    options={PayFrequencyList}
                    renderInput={(params) => <TextField {...params} ariant='outlined' size='small' inputRef={refPaymentFrequency} label="Frequency" />}
                />
                <TextField required inputRef={refMargin} variant='outlined' size='small' label='Margin' />

            </TextFieldGroupContainer>


            <TextFieldGroupContainer cols='1fr 1fr 1fr'>

                <TextField required inputRef={refDays} variant='outlined' size='small' label='Days' />
                <FormControlLabel control={<Checkbox inputRef={refPassThrough} defaultChecked />} label="Pass Through" />
                <FormControlLabel control={<Checkbox inputRef={refPassDiscount} defaultChecked />} label="Pass Discount" />
            </TextFieldGroupContainer>
            <TextFieldGroupContainer cols='1fr'>

                <TextField required inputRef={refTimeSheetEntryFormat} variant='outlined' size='small' label='Timesheet Entry Format' />
                <TextField required inputRef={refPaymentTerms} type='number' variant='outlined' size='small' label='Payment Terms' />
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

export default AABillingDetails