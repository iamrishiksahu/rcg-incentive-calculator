import { Button, TextField, Box, FormControlLabel, Checkbox, Autocomplete } from '@mui/material'
import './AddCandidate.css'
import { TextFieldGroupContainer } from '../../CustomElements/Containers/TexFieldGroupContainer'
import { DatePicker } from '@mui/x-date-pickers'
import { useRef, useState } from 'react'
import axiosp from '../../Utils/axiosConfig'
import PurchaseOrderPopup from '../PurchaseOrderPopup/PurchaseOrderPopup'
import { AmountUnitList } from '../../Utils/constants'
const AddCandidate = () => {


    const [purchaseOrderData, setPurchaseOrderData] = useState({})

    const refFirstName = useRef()
    const refOvertimeExempt = useRef()
    const refLastName = useRef()
    const refLegalFirst = useRef()
    const refLegalMiddle = useRef()
    const refLegalLast = useRef()
    const refSuffix = useRef()
    const refPrimaryEmail = useRef()
    const refSecondaryEmail = useRef()
    const refAddressLine1 = useRef()
    const refAddressLine2 = useRef()
    const refState = useRef()
    const refCity = useRef()
    const refZipCode = useRef()
    const refCountry = useRef()
    const refPhonePersonal = useRef()
    const refPhoneHome = useRef()
    const refPhoneWork = useRef()
    const refStartDate = useRef()
    const refEndDate = useRef()
    const refJobDivaID = useRef()
    const refCustomerReferenceNo = useRef()
    const refPurchaseOrderNo = useRef()
    const refJobTitle = useRef()
    const refEmploymentCategory = useRef()
    const refPayRate = useRef();
    const refPayRateUnit = useRef();
    const refPaymentFrequency = useRef();
    const refPaymentFrequencyUnit = useRef();
    const refPerDiem = useRef();
    const refJobCompany = useRef();
    const refCurrency = useRef();
    const refHireHistory = useRef();
    const refPerDiemUnit = useRef();
    const refOtherExpenses = useRef();
    const refOtherExpensesUnit = useRef();
    const refOutsideCommissions = useRef();
    const refOutsideCommissionsUnit = useRef();
    const refPayRollID = useRef();
    const refCurrentSalary = useRef()
    const refCurrentSalaryUnit = useRef()
    const refPreferredSalaryUnit = useRef()
    const refPreferredSalary = useRef()

    const [open, setOpen] = useState(false)

    const handleSubmitClick = async (e) => {
        e.preventDefault()

        const getCandidateData = {

            suffix: refSuffix.current.value,
            first_name: refFirstName.current.value,
            last_name: refLastName.current.value,
            legal_first_name: refLegalFirst.current.value,
            lega_middle_name: refLegalMiddle.current.value,
            legal_last_name: refLegalLast.current.value,
            email: refPrimaryEmail.current.value,
            email2: refSecondaryEmail.current.value,
            address: refAddressLine1.current.value,
            address2: refAddressLine2.current.value,
            state: refState.current.value,
            city: refCity.current.value,
            pin_code: refZipCode.current.value,
            country: refCountry.current.value,
            mobile: refPhonePersonal.current.value,
            home: refPhoneHome.current.value,
            work: refPhoneWork.current.value,
            preferred_duration: refPreferredSalaryUnit.current.value,
            preferred: refPreferredSalary.current.value,
            current_duration: refCurrentSalaryUnit.current.value,
            current: refCurrentSalary.current.value,
            home_fax: '',
            ext: '',
            start_date: refStartDate.current.value,
            end_date: refEndDate.current.value,
            job_diva_job: refJobDivaID.current.value,
            job_title: refJobTitle.current.value,
            job_company: refJobCompany.current.value,
            hire_history: refHireHistory.current.value,
            currency: refCurrency.current.value,
            employment_category: refEmploymentCategory.current.value,
            payment_frequency: refPaymentFrequency.current.value,
            pay_rate: refPayRate.current.value,
            pay_rate_choices: refPayRateUnit.current.value, 
            overtime_exempt: refOvertimeExempt.current.checked,
            per_diem: refPerDiem.current.value,
            per_diem_choices: refPerDiemUnit.current.value,
            other_expenses: refOtherExpenses.current.value,
            other_expenses_choices: refOtherExpensesUnit.current.value,
            outside_commission: refOutsideCommissions.current.value,
            outside_commission_choices: refOutsideCommissionsUnit.current.value,
            
            payroll_profile_id: refPayRollID.current.value,


        }

        try {
            const res = await axiosp.post('/add_candidate_and_send_credentials/', getCandidateData);
            console.log(res);
            if (res.status == 201) {
                alert('Successfully Added Candidate!')
            } else {
                alert('Failed!')
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handlePayApprovalSubmit = async (e) => {

        e.preventDefault()

        const approvalData = {
            start_date: refStartDate.current.value,
            end_date: refEndDate.current.value,
            job_diva_job_number: refJobDivaID.current.value,
            job_title: refJobTitle.current.value,
            employment_category: refEmploymentCategory.current.value,
            payment_frequency: refPaymentFrequency.current.value,
            // payable_rates: refPayRate.current.value,



            // hire_history: .current.value,
            // currency: .current.value,
            // job_company: .current.value,
            // manage_stipends: .current.value,
            // overtime_exempt: .current.value,
            // fixed_costs: .current.value,

            per_diem: refPerDiem.current.value,
            other_expenses: refOtherExpenses.current.value,
            outside_commission: refOutsideCommissions.current.value,
            payroll_profile_id: refPayRollID.current.value,
            pay_rate: refPayRate.current.value,

            payable_rates: 100000,
            "manage_stipends": 123,
            "per_diem": 123,
            "other_expenses": 123123,
            "outside_commission": 898,
            "fixed_costs": 23463,
            "pay_rate": 23456,

        }
        try {
            const res = await axiosp.post('/pay-approval/approval-details/', approvalData)
            console.log(res);
            if (res.status == 201) {
                alert('Successfully Added Candidate!')
            } else {
                alert('Failed!')

            }
        } catch (err) {
            console.log(err)
        }
    }



    return (

        <div className='parent'>

            <div className='card'>

                <h3>Add Candidate Details</h3>

                <TextFieldGroupContainer cols='1fr 3fr 3fr'>
                    <TextField required inputRef={refSuffix} variant='outlined' size='small' label='Mr.' />
                    <TextField required inputRef={refFirstName} variant='outlined' size='small' label='First Name' />
                    <TextField required inputRef={refLastName} variant='outlined' size='small' label='Last Name' />
                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='1fr 1fr 1fr'>

                    <TextField required inputRef={refLegalFirst} variant='outlined' size='small' label='Legal First Name' />
                    <TextField required inputRef={refLegalMiddle} variant='outlined' size='small' label='Legal Middle Name' />
                    <TextField required inputRef={refLegalLast} variant='outlined' size='small' label='Legal Last Name' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField required type='email' inputRef={refPrimaryEmail} variant='outlined' size='small' label='Primary Email' />
                    <TextField required type='email' inputRef={refSecondaryEmail} variant='outlined' size='small' label='Secondary Email' />
                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField required inputRef={refAddressLine1} variant='outlined' size='small' label='Address Line 1' />
                    <TextField required inputRef={refAddressLine2} variant='outlined' size='small' label='Address Line 2' />
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr 1fr 1fr'>

                    <TextField required inputRef={refState} variant='outlined' size='small' label='State' />
                    <TextField required inputRef={refCity} variant='outlined' size='small' label='City' />
                    <TextField required type='number' inputRef={refZipCode} variant='outlined' size='small' label='Zip Code' />
                    <TextField required inputRef={refCountry} variant='outlined' size='small' label='Country' />
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr 1fr'>
                    <TextField required type='number' inputRef={refPhonePersonal} variant='outlined' size='small' label='Phone (Personal)' />
                    <TextField required type='number' inputRef={refPhoneHome} variant='outlined' size='small' label='Phone (Home)' />
                    <TextField required type='number' inputRef={refPhoneWork} variant='outlined' size='small' label='Phone (Work)' />

                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='3fr 1fr 3fr 1fr'>
                    <TextField required inputRef={refCurrentSalary} variant='outlined' size='small' label='Current Salary' />
                    <Autocomplete
                        disablePortal
                        options={AmountUnitList}
                        renderInput={(params) => <TextField  {...params} ariant='outlined' size='small' inputRef={refCurrentSalaryUnit} label="Unit" />}
                    />
                    {/* <TextField required inputRef={refCurrentSalaryUnit} variant='outlined' size='small' label='Rs/Yr' /> */}
                    <TextField ref={refPreferredSalary} required variant='outlined' size='small' label='Preferred Salary' />
                    <Autocomplete
                        disablePortal
                        options={AmountUnitList}
                        renderInput={(params) => <TextField  {...params} ariant='outlined' size='small' inputRef={refPreferredSalaryUnit} label="Unit" />}
                    />
                </TextFieldGroupContainer>


            </div>


            <div className='card'>

                <h3>Pay Details</h3>

                <TextFieldGroupContainer cols='1fr 1fr 1fr'>
                    <DatePicker inputRef={refStartDate} format='YYYY-MM-DD' slotProps={{ textField: { size: 'small' } }} label="Start Date" />
                    <DatePicker inputRef={refEndDate} format='YYYY-MM-DD' slotProps={{ textField: { size: 'small' } }} label="End Date" />
                    <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='text' label='JobDiva ID' />
                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='4fr 8fr 1fr'>

                    <TextField required inputRef={refCustomerReferenceNo} variant='outlined' size='small' label='Customer Ref No' />
                    <TextField required inputRef={refPurchaseOrderNo} variant='outlined' size='small' label='Purchase Order No' />
                    <Button variant='outlined'
                        onClick={() => setOpen(true)}>+</Button>

                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField required inputRef={refJobTitle} variant='outlined' size='small' label='Job Title' />
                    <TextField required inputRef={refEmploymentCategory} variant='outlined' size='small' label='Employment Cateogry' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr'>
                    <TextField required inputRef={refJobCompany} variant='outlined' size='small' label='Job Company' />
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField required inputRef={refCurrency} variant='outlined' size='small' label='Currency' />
                    <FormControlLabel sx={{color: 'var(--color-info-dark)'}} control={<Checkbox  inputRef={refOvertimeExempt} />}  label="Overtime Exempt" />

                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr'>
                    <TextField required inputRef={refHireHistory} variant='outlined' size='small' label='Hire History' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='3fr 1fr 4fr'>
                    <TextField required inputRef={refPayRate} variant='outlined' size='small' label='Pay Rate' />
                    <TextField required inputRef={refPayRateUnit} variant='outlined' size='small' label='H' />
                    <TextField required inputRef={refPaymentFrequency} variant='outlined' size='small' label='Payment Frequency' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='3.15fr 1fr 3fr 1fr'>
                    <TextField type='number'  required inputRef={refPerDiem} variant='outlined' size='small' label='Per Diem' />
                    <TextField  required inputRef={refPerDiemUnit} variant='outlined' size='small' label='H' />
                    <TextField required inputRef={refOtherExpenses} variant='outlined' size='small' label='Other Expenses' type='number'  />
                    <TextField  required inputRef={refOtherExpensesUnit} variant='outlined' size='small' label='H' />
                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='3fr 1fr 4fr'>
                    <TextField type='number' required inputRef={refOutsideCommissions} variant='outlined' size='small' label='Outside Comissions' />
                    <TextField required inputRef={refOutsideCommissionsUnit} variant='outlined' size='small' label='H' />
                    <TextField type='number' required inputRef={refPayRollID} variant='outlined' size='small' label='Pay Roll ID' />
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
                    // onClick={() => console.log(refCurrentSalaryUnit.current.value)} 
                >
                    Submit

                </Button>


            </Box>

            <PurchaseOrderPopup open={open} setOpen={setOpen} setPurchaseOrderData={setPurchaseOrderData} />

        </div>
    )
}

export default AddCandidate