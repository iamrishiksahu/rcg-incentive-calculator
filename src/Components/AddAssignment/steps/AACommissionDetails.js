import React, { useRef, useState } from 'react'
import { Button, TextField, Autocomplete } from '@mui/material'
// import './AddAssignment.css'
import { TextFieldGroupContainer } from '../../../CustomElements/Containers/TexFieldGroupContainer';

import { DatePicker } from '@mui/x-date-pickers';
import { DivisionsList, CurrencyList } from '../../../Utils/constants';
import PurchaseOrderPopup from '../../PurchaseOrderPopup/PurchaseOrderPopup';


const AACommissionDetails = ({ setFormData, handleNext, handleBack }) => {

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
    const [purchaseOrderData, setPurchaseOrderData] = useState({})

    const handleContinue = async () => {
        await setFormData((d) => { return { ...d, data: 'sadf' } })
        handleNext()
    }



    return (
        <div className='card'>

            {/* <h3>Candidate Details</h3> */}

            <TextFieldGroupContainer cols='5fr 2fr'>

                <TextField inputRef={refPrimarySales} variant='outlined' size='small' label='Primary Sales' />
                <TextField type='number' inputRef={refPrimarySalesPercent} variant='outlined' size='small' label='%' />

            </TextFieldGroupContainer>


            <TextFieldGroupContainer cols='5fr 2fr'>

                <TextField inputRef={refSecondarySales} variant='outlined' size='small' label='Secondary Sales' />
                <TextField type='number' inputRef={refSecondarySalesPercent} variant='outlined' size='small' label='%' />

            </TextFieldGroupContainer>


            <TextFieldGroupContainer cols='5fr 2fr'>

                <TextField inputRef={refTertiarySales} variant='outlined' size='small' label='Tertiary Sales' />
                <TextField type='number' inputRef={refTertialSalesPercent} variant='outlined' size='small' label='%' />

            </TextFieldGroupContainer>


            <TextFieldGroupContainer cols='5fr 2fr'>

                <TextField inputRef={refPrimaryRecruiter} variant='outlined' size='small' label='Primary Recruiter Sales' />
                <TextField type='number' inputRef={refPrimaryRecruiterPercent} variant='outlined' size='small' label='%' />

            </TextFieldGroupContainer>


            <TextFieldGroupContainer cols='5fr 2fr'>

                <TextField inputRef={refSecondaryRecruiter} variant='outlined' size='small' label='Secondary Recruiter Sales' />
                <TextField type='number' inputRef={refSecondaryRecruiterPercent} variant='outlined' size='small' label='%' />

            </TextFieldGroupContainer>


            <TextFieldGroupContainer cols='5fr 2fr'>

                <TextField inputRef={refTertiaryRecruterPecent} variant='outlined' size='small' label='Tertiary Recruiter Sales' />
                <TextField type='number' inputRef={refTertiaryRecruiter} variant='outlined' size='small' label='%' />

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

export default AACommissionDetails