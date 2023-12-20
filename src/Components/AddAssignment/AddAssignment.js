import React, { useEffect, useRef, useState } from 'react'
import { Button, TextField, Autocomplete, Box, FormControlLabel, Checkbox, FormControl, Switch } from '@mui/material'
import './AddAssignment.css'
import usePageTitle from '../../hooks/usePageTitle'
import axiosp from '../../Utils/axiosConfig'
import AddAssignmentStepper from './AddAssignmentStepper'
import { useParams } from 'react-router-dom'

const AddAssignment = () => {

    const { id } = useParams()


    if (!id) {
        alert('ID not available!')
        // TODO: navigate back 
    }

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

    const [open, setOpen] = useState(false)
    const [purchaseOrderData, setPurchaseOrderData] = useState({})


    const [candidateDetails, setCandidateDetails] = useState(null)

    const getCandidateDetails = async () => {

        try {
            const res = axiosp.get(`/candidate_details/${id}`)
            console.log(res.data)
            setCandidateDetails(res.data)
        } catch (err) {
            console.log(err)
        }
    }

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
            timesheet_entry_format: refTimeSheetEntryFormat.current.value,
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
            pass_through: refPassThrough.current.checked,
            pass_discount: refPassDiscount.current.checked,
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

        try {

            const res = await axiosp.post('/assignment_add_job_details/', extractData);
            console.log(res.data)
            alert('Successfully Saved!')

        } catch (err) {
            console.log(err);
            alert('Error occurred!')
        }


    }
    const {setTitleProps} = usePageTitle()

    useEffect(() => {
        setTitleProps({title: 'Add Assignment', goBack: '/dashboard/assignments'})
    }, [])

    return (

        <>
            <Box sx={{
                display: 'grid',
                width: '60%',
                padding: '2rem',
                gridTemplateColumns: '1fr',
                ml: 'auto',
                mr: 'auto',
                pb: '8rem',
            }}>

                <AddAssignmentStepper />

            </Box>
        </>
    )
}

export default AddAssignment

