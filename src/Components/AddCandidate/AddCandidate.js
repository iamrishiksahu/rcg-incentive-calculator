import { Button, TextField } from '@mui/material'
import './AddCandidate.css'
import { TextFieldGroupContainer } from '../../CustomElements/Containers/TexFieldGroupContainer'
import { DatePicker } from '@mui/x-date-pickers'
import { useRef } from 'react'

const AddCandidate = () => {

    const refCandidateSalutation = useRef()
    const refFirstName = useRef()
    const refLastName = useRef()
    const refLegalFullName = useRef()
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
    const refPerDiemUnit = useRef();
    const refOtherExpenses = useRef();
    const refOtherExpensesUnit = useRef();
    const refOutsideCommissions = useRef();
    const refOutsideCommissionsUnit = useRef();
    const refPayRollID = useRef();
  
    return (

        <div className='parent'>

            <div className='card'>

                <h3>Add Candidate Details</h3>

                <TextFieldGroupContainer cols='1fr 3fr 3fr'>
                    <TextField inputRef={refCandidateSalutation} variant='outlined' size='small' label='Mr.' />
                    <TextField inputRef={refFirstName} variant='outlined' size='small' label='First Name' />
                    <TextField inputRef={refLastName} variant='outlined' size='small' label='Last Name' />
                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='3fr 1fr'>

                    <TextField inputRef={refLegalFullName} variant='outlined' size='small' label='Legal Full Name' />
                    <TextField inputRef={refSuffix} variant='outlined' size='small' label='Suffix' />

                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField inputRef={refPrimaryEmail} variant='outlined' size='small' label='Primary Email' />
                    <TextField inputRef={refSecondaryEmail} variant='outlined' size='small' label='Secondary Email' />
                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField inputRef={refAddressLine1} variant='outlined' size='small' label='Address Line 1' />
                    <TextField inputRef={refAddressLine2} variant='outlined' size='small' label='Address Line 2' />
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr 1fr 1fr'>

                    <TextField inputRef={refState} variant='outlined' size='small' label='State' />
                    <TextField inputRef={refCity} variant='outlined' size='small' label='City' />
                    <TextField inputRef={refZipCode} variant='outlined' size='small' label='Zip Code' />
                    <TextField inputRef={refCountry} variant='outlined' size='small' label='Country' />
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr 1fr'>
                    <TextField inputRef={refPhonePersonal} variant='outlined' size='small' label='Phone (Personal)' />
                    <TextField inputRef={refPhoneHome} variant='outlined' size='small' label='Phone (Home)' />
                    <TextField inputRef={refPhoneWork} variant='outlined' size='small' label='Phone (Work)' />

                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='3fr 1fr 3fr 1fr'>
                    <TextField variant='outlined' size='small' label='Test' />
                    <TextField variant='outlined' size='small' label='Test' />
                    <TextField variant='outlined' size='small' label='Test' />
                    <TextField variant='outlined' size='small' label='Test' />
                </TextFieldGroupContainer>

                <Button variant='outlined'
                >
                    Reset Fields

                </Button>
                <Button variant='contained'
                >
                    Add Candidate

                </Button>
            </div>


            <div className='card'>

                <h3>Pay Details</h3>

                <TextFieldGroupContainer cols='1fr 1fr 1fr'>
                    <DatePicker inputRef={refStartDate} slotProps={{ textField: { size: 'small' } }} label="Start Date" />
                    <DatePicker inputRef={refEndDate} slotProps={{ textField: { size: 'small' } }} label="End Date" />
                    <TextField inputRef={refJobDivaID} variant='outlined' size='small' type='text' label='JobDiva ID' />
                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='1fr 2fr'>

                    <TextField inputRef={refCustomerReferenceNo} variant='outlined' size='small' label='Customer Ref No' />
                    <TextField inputRef={refPurchaseOrderNo} variant='outlined' size='small' label='Purchase Order No' />

                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 1fr'>
                    <TextField inputRef={refJobTitle} variant='outlined' size='small' label='Job Title' />
                    <TextField inputRef={refEmploymentCategory} variant='outlined' size='small' label='Employment Cateogry' />
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

                <Button variant='outlined'
                >
                    Reset Fields

                </Button>
                <Button variant='contained'
               
                >
                    Approve

                </Button>


            </div>

        </div>
    )
}

export default AddCandidate