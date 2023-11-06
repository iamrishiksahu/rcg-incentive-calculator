import React, { useRef } from 'react'
import { Button, TextField, Autocomplete, Box, FormControlLabel, Checkbox, FormControl, Switch } from '@mui/material'
import './AddAssignment.css'
import { TextFieldGroupContainer } from '../../CustomElements/Containers/TexFieldGroupContainer'
import { DatePicker } from '@mui/x-date-pickers'
import { AmountUnitList, CurrencyList } from '../../Utils/constants'
import axiosp from '../../Utils/axiosConfig'


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

    const handleSubmitClick = async (e) => {
        e.preventDefault()

        const extractData = {
            startdate: refStartDate.current.value,
            enddate: refEndDate.current.value,
            customer_ref: refCustomerReferenceNo.current.value,
            jobdiva_job: refJobdivaID.current.value,
            job_title: refJobTitle.current.value,
            client_contact: refClientContact.current.value,
            billing_contact: refBillingContact.current.value,
            billing_company: refBillingCompanyAddress.current.value,
            Billing_Address_same_as_working_address: refBillingAddressSameAsWorkingAddress.current.checked,
            division: refDivision.current.value,
            currency: refCurrency.current.value,
            bill_rate: refBillRate.current.value,
            net_bill: refNetBill.current.value,
            margin: refMargin.current.value,
            timesheet_entry_formate: refTimeSheetEntryFormat.current.value,
            frequency: refPaymentFrequency.current.value,
            billing_units: refBillingUnit.current.value,
            week_ending: refWeekEnding.current.value,
            hours_day: refHoursDay.current.value,
            hours_half_day: refhoursHalfDay.current.value,
            working_locaton: refWorkingLocation.current.value,
            working_address_1: refWorkingAddressLine1.current.value,
            working_address_2: refWorkingAddressLine2.current.value,
            working_city: refWorkingCity.current.value,
            pin_code: refPinCode.current.value,
            working_state: refWorkingState.current.value,
            working_country: refWorkingCountry.current.value,
            payment_terms: refPaymentTerms.current.value,
            days: refDays.current.value,
            pass_through: refPassThrough.current.value,
            pass_discount: refPassDiscount.current.value,
            primary_sales_percentage: refPrimarySalesPercent.current.value,
            secondary_sales_percentage: refSecondarySalesPercent.current.value,
            tertiary_sales_percentage: refTertialSalesPercent.current.value,
            primary_recruiter_percentage: refPrimaryRecruiterPercent.current.value,
            secondary_recruiter_percentage: refSecondaryRecruiterPercent.current.value,
            tertiary_recruiter_percentage: refTertiaryRecruterPecent.current.value,
            primary_sales: refPrimarySales.current.value,
            secondary_sales: refSecondarySales.current.value,
            tertiary_sales: refTertiarySales.current.value,
            primary_recruiter: refPrimaryRecruiter.current.value,
            secondary_recruiter: refSecondaryRecruiter.current.value,
            tertiary_recruiter: refTertiaryRecruiter.current.value,

        }

        try{

            const res = await axiosp.post('/assignment_add_job_details', extractData);
            console.log(res.data)
            alert('Successfully Saved!')

        }catch(err){
            console.log(err);
            alert('Error occurred!')
        }


    }

    return (

        <>

            <div className='parent'>


                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '2rem'
                }}>


                    <div className='card'>

                        <h3>Candidate Details</h3>


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
                                options={AmountUnitList}
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

                    </div>
                    <div className='card'>


                        <Box sx={{
                            display: 'flex',
                            gap: '2rem',
                        }}>

                        <h3>Billing Details</h3>
                        <FormControlLabel sx={{
                            mt: '-1rem'
                        }} control={<Switch defaultChecked />} label="Aprove" />
                        </Box>


                        <TextFieldGroupContainer cols='1fr 1fr'>

                            <Autocomplete
                                disablePortal
                                options={CurrencyList}
                                renderInput={(params) => <TextField {...params} ariant='outlined' size='small' inputRef={refCurrency} label="Currency" />}
                            />

                            <TextField inputRef={refBillingUnit} variant='outlined' size='small' label='Billing Units' />
                        </TextFieldGroupContainer>




                        <TextFieldGroupContainer cols='1fr 1fr 1fr'>
                            <TextField inputRef={refWeekEnding} variant='outlined' size='small' label='Week Ending' />
                            <TextField required inputRef={refHoursDay} variant='outlined' size='small' label='Hours / Day' />
                            <TextField required inputRef={refhoursHalfDay} variant='outlined' size='small' label='Hours / Half Day' />
                        </TextFieldGroupContainer>

                        <TextFieldGroupContainer cols='1fr 1fr'>

                            <TextField required inputRef={refBillRate} variant='outlined' size='small' label='Bill Rate' />
                            <TextField required inputRef={refNetBill} variant='outlined' size='small' label='Net Bill' />

                        </TextFieldGroupContainer>
                        <TextFieldGroupContainer cols='1fr 1fr'>

                            <TextField required inputRef={refPaymentFrequency} variant='outlined' size='small' label='Frequency' />
                            <TextField required inputRef={refMargin} variant='outlined' size='small' label='Margin' />

                        </TextFieldGroupContainer>


                        <TextFieldGroupContainer cols='1fr 1fr 1fr'>

                            <TextField required inputRef={refDays} variant='outlined' size='small' label='Days' />
                            <TextField required inputRef={refPassThrough} variant='outlined' size='small' label='Pass Through' />
                            <TextField required inputRef={refPassDiscount} variant='outlined' size='small' label='Discount' />
                        </TextFieldGroupContainer>
                        <TextFieldGroupContainer cols='1fr'>

                            <TextField required inputRef={refTimeSheetEntryFormat} variant='outlined' size='small' label='Timesheet Entry Format' />
                            <TextField required inputRef={refPaymentTerms} variant='outlined' size='small' label='Payment Terms' />
                        </TextFieldGroupContainer>
                    </div>

                </div>


                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '2rem'
                }}>

                    <div className='card'>

                        <h3>Working Address</h3>
                        <TextFieldGroupContainer cols='1fr'>
                            <FormControlLabel sx={{ color: 'var(--color-info-dark)' }} control={<Checkbox defaultChecked inputRef={refBillingAddressSameAsWorkingAddress} />} label="Billing Address Same as Working Address" />

                        </TextFieldGroupContainer>

                        <TextFieldGroupContainer cols='1fr 1fr'>
                            <TextField inputRef={refWorkingLocation} variant='outlined' size='small' label='Working Location' />
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

                        <h3>Commission Details</h3>


                        <TextFieldGroupContainer cols='5fr 2fr'>

                            <TextField inputRef={refPrimarySales} variant='outlined' size='small' label='Primary Sales' />
                            <TextField inputRef={refPrimarySalesPercent} variant='outlined' size='small' label='%' />

                        </TextFieldGroupContainer>


                        <TextFieldGroupContainer cols='5fr 2fr'>

                            <TextField inputRef={refSecondarySales} variant='outlined' size='small' label='Secondary Sales' />
                            <TextField inputRef={refPrimarySalesPercent} variant='outlined' size='small' label='%' />

                        </TextFieldGroupContainer>


                        <TextFieldGroupContainer cols='5fr 2fr'>

                            <TextField inputRef={refTertiarySales} variant='outlined' size='small' label='Tertiary Sales' />
                            <TextField inputRef={refTertialSalesPercent} variant='outlined' size='small' label='%' />

                        </TextFieldGroupContainer>


                        <TextFieldGroupContainer cols='5fr 2fr'>

                            <TextField inputRef={refPrimaryRecruiter} variant='outlined' size='small' label='Primary Recruiter Sales' />
                            <TextField inputRef={refPrimaryRecruiterPercent} variant='outlined' size='small' label='%' />

                        </TextFieldGroupContainer>


                        <TextFieldGroupContainer cols='5fr 2fr'>

                            <TextField inputRef={refSecondaryRecruiterPercent} variant='outlined' size='small' label='Secondary Recruiter Sales' />
                            <TextField inputRef={refSecondaryRecruiterPercent} variant='outlined' size='small' label='%' />

                        </TextFieldGroupContainer>


                        <TextFieldGroupContainer cols='5fr 2fr'>

                            <TextField inputRef={refTertiaryRecruterPecent} variant='outlined' size='small' label='Tertiary Recruiter Sales' />
                            <TextField inputRef={refTertiaryRecruiter} variant='outlined' size='small' label='%' />

                        </TextFieldGroupContainer>



                    </div>
                </div>


            </div>

            <Box sx={{
                display: 'flex',
                gap: '1rem',
                mt: '2rem',
                pb: '4rem',
                justifyContent: 'center '
            }}>
                <Button variant='outlined'
                >
                    Reset Fields

                </Button>
                <Button variant='contained'
                    type='submit'
                    onClick={handleSubmitClick}

                >
                    Submit

                </Button>



            </Box>
        </>
    )
}

export default AddAssignment

