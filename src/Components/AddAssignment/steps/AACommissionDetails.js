import React, { useRef, useState } from 'react'
import { Button, TextField, Autocomplete } from '@mui/material'
// import './AddAssignment.css'
import { TextFieldGroupContainer } from '../../../CustomElements/Containers/TexFieldGroupContainer';

import { DatePicker } from '@mui/x-date-pickers';
import { DivisionsList, CurrencyList } from '../../../Utils/constants';
import PurchaseOrderPopup from '../../PurchaseOrderPopup/PurchaseOrderPopup';


const AACommissionDetails = ({ formData, setFormData, handleNext, handleBack }) => {

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

    const handleContinue = async (e) => {
        e.preventDefault()

        const data = {
            primary_sales_percentage: e.target.ps_prct.value ,
            secondary_sales_percentage: e.target.ss_prct.value ,	
            tertiary_sales_percentage: e.target.ts_prct.value ,
            primary_recruiter_percentage: e.target.prs_prct.value ,
            secondary_recruiter_percentage: e.target.srs_prct.value ,
            tertiary_recruiter_percentage: e.target.trs_prct.value ,
            primary_sales: e.target.ps.value ,
            secondary_sales: e.target.ss.value ,
            tertiary_sales: e.target.ts.value ,
            primary_recruiter: e.target.prs.value ,
            secondary_recruiter: e.target.srs.value ,	
            tertiary_recruiter: e.target.trs.value ,
        }
        await setFormData((d) => { return { ...d, commission_details: data } })
        handleNext()
    }



    return (
        <form noValidate onSubmit={handleContinue}>
            <div className='card'>

                {/* <h3>Candidate Details</h3> */}

                <TextFieldGroupContainer cols='5fr 2fr'>

                    <TextField inputRef={refPrimarySales} variant='outlined' name='ps' size='small' label='Primary Sales' />
                    <TextField type='number' inputRef={refPrimarySalesPercent} variant='outlined' name='ps_prct' size='small' label='%' />

                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='5fr 2fr'>

                    <TextField inputRef={refSecondarySales} variant='outlined' name='ss' size='small' label='Secondary Sales' />
                    <TextField type='number' inputRef={refSecondarySalesPercent} variant='outlined' name='ss_prct' size='small' label='%' />

                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='5fr 2fr'>

                    <TextField inputRef={refTertiarySales} variant='outlined' name='ts' size='small' label='Tertiary Sales' />
                    <TextField type='number' inputRef={refTertialSalesPercent} variant='outlined' name='ts_prct' size='small' label='%' />

                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='5fr 2fr'>

                    <TextField inputRef={refPrimaryRecruiter} variant='outlined' name='prs' size='small' label='Primary Recruiter Sales' />
                    <TextField type='number' inputRef={refPrimaryRecruiterPercent} variant='outlined' name='prs_prct' size='small' label='%' />

                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='5fr 2fr'>

                    <TextField inputRef={refSecondaryRecruiter} variant='outlined' name='srs' size='small' label='Secondary Recruiter Sales' />
                    <TextField type='number' inputRef={refSecondaryRecruiterPercent} variant='outlined' name='srs_prct' size='small' label='%' />

                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='5fr 2fr'>

                    <TextField inputRef={refTertiaryRecruterPecent} variant='outlined' name='trs' size='small' label='Tertiary Recruiter Sales' />
                    <TextField type='number' inputRef={refTertiaryRecruiter} variant='outlined' name='trs_prct' size='small' label='%' />

                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr 5fr'>

                    <Button type='submit' variant='contained'>
                        Finalize
                    </Button>
                    <Button onClick={handleBack}>
                        Back
                    </Button>

                </TextFieldGroupContainer>

            </div>
        </form>
    )
}

export default AACommissionDetails