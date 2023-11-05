import * as React from 'react';
import { Button, TextField, Box, Checkbox, Typography, FormControlLabel } from '@mui/material'
import { TextFieldGroupContainer } from '../../CustomElements/Containers/TexFieldGroupContainer'
import { DatePicker } from '@mui/x-date-pickers'
import { useRef, useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const emails = ['username@gmail.com', 'user02@gmail.com'];

const PurchaseOrderPopup = ({ open, setOpen, setPurchaseOrderData }) => {

    const refStartDate = useRef()
    const refEndDate = useRef()
    const refJobDivaID = useRef()
    const refCustomerReferenceNo = useRef()
    const refPurchaseOrderNo = useRef()
    const refCompanyName = useRef()
    const refPONumber = useRef()
    const refHours = useRef()
    const refAmount = useRef()

    const handleSaveClick = (e) => {
        e.preventDefault()

        // Do processing

        const data = {
            start_date: refStartDate.current.value,
            end_date: refEndDate.current.value,
            hours: refHours.current.value,
            
        }

        setPurchaseOrderData()

        setOpen(false)

    }


    const handleClose = () => {
        setOpen(false)
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Purchase Order</DialogTitle>

            <Box sx={{
                display: 'grid',
                gap: '1rem',
                padding: '0 2rem 2rem 2rem'
            }}>

                <TextFieldGroupContainer cols='1fr'>

                    <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='text' label='PO Number' />
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr'>

                    <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='text' label='Company Name' />
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr'>

                    <DatePicker inputRef={refStartDate} slotProps={{ textField: { size: 'small' } }} label="Start Date" />
                    <DatePicker inputRef={refEndDate} slotProps={{ textField: { size: 'small' } }} label="End Date" />

                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr 1fr'>

                    <TextField required inputRef={refAmount} variant='outlined' size='small' label='Amount ($)' />
                    <TextField required inputRef={refHours} variant='outlined' size='small' label='Hours' />

                </TextFieldGroupContainer>


                <TextFieldGroupContainer cols='1fr 1fr 1fr'>

                    <FormControlLabel control={<Checkbox />} label="Active" />
                    <FormControlLabel control={<Checkbox />} label="Regular" />
                    <FormControlLabel control={<Checkbox />} label="Overtime" />

                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols='1fr 1fr 1fr'>

                    <FormControlLabel control={<Checkbox />} label="Doubletime" />
                    <FormControlLabel control={<Checkbox />} label="Expense" />
                    <FormControlLabel control={<Checkbox />} label="Milestone" />

                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols='1fr'>
                    <TextField required inputRef={refCustomerReferenceNo} variant='outlined' size='small' label='Description' multiline rows={'4'} />



                </TextFieldGroupContainer>

                <Button onClick={handleSaveClick} mt={"2rem"} variant='outlined'>Save</Button>



            </Box>


        </Dialog>
    );
}

export default PurchaseOrderPopup