import * as React from 'react';
import { Button, TextField, Box, Checkbox, Typography, FormControlLabel, Autocomplete } from '@mui/material'
import { TextFieldGroupContainer } from '../../../CustomElements/Containers/TexFieldGroupContainer'
import { DatePicker } from '@mui/x-date-pickers'
import { useRef, useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import {DummyWorkList} from '../../../Utils/constants'

const emails = ['username@gmail.com', 'user02@gmail.com'];

const SubmitTimesheetPopup = ({ open, setOpen, rowData }) => {

    const refStartDate = useRef()
    const refEndDate = useRef()
    const refJobDivaID = useRef()
    const refCustomerReferenceNo = useRef()
    const refHours = useRef()
    const refAmount = useRef()

    const handleSaveClick = (e) => {
        e.preventDefault()

        // Do processing


        // setPurchaseOrderData()

        setOpen(false)

    }


    const handleClose = () => {
        setOpen(false)
    };

    if(rowData){
        return (
            <Dialog onClose={handleClose} open={open}>
    
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
    
                    <DialogTitle>Submit Timesheet</DialogTitle>
                    <Typography sx={{
                        backgroundColor: '#ffeeee',
                        padding: '0 0.5rem',
                        color: '#663c00',
                        fontSize: '0.9rem',
                        borderRadius: '1rem',
                        height: 'max-content'
                        // maxWidth: 'max-content',
                        // margin: 'auto'
                    }}
                    >
                        {rowData.week_start}
                    </Typography>
                    To
                    <Typography sx={{
                        backgroundColor: '#ffeeee',
                        padding: '0 0.5rem',
                        color: '#663c00',
                        fontSize: '0.9rem',
                        borderRadius: '1rem',
                        height: 'max-content'
    
                        // maxWidth: 'max-content',
                        // margin: 'auto'
                    }}
                    >
                        {rowData.week_end}
                    </Typography>
    
                </Box>
    
    
    
    
                <Box sx={{
                    display: 'grid',
                    gap: '1rem',
                    padding: '0 2rem 2rem 2rem'
                }}>
    
                    <TextFieldGroupContainer cols='1fr'>
    
                        <Autocomplete
                            disablePortal
                            fullWidth
                            options={DummyWorkList}
                            renderInput={(params) => <TextField {...params} ariant='outlined' size='small' label="Select Project" />}
                        />
                    </TextFieldGroupContainer >
                    <Typography>Regular (Hours)</Typography>
                    <TextFieldGroupContainer cols='repeat(7,1fr)'>
    
                        <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='number' label='Mon' />
                        <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='number' label='Tue' />
                        <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='number' label='Wed' />
                        <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='number' label='Thu' />
                        <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='number' label='Fri' />
                        <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='number' label='Sat' />
                        <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='number' label='Sun' />
                    </TextFieldGroupContainer>
                    <Typography>OverTime (Hours)</Typography>
                    <TextFieldGroupContainer cols='repeat(7,1fr)'>
    
                        <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='number' label='Mon' />
                        <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='number' label='Tue' />
                        <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='number' label='Wed' />
                        <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='number' label='Thu' />
                        <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='number' label='Fri' />
                        <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='number' label='Sat' />
                        <TextField required inputRef={refJobDivaID} variant='outlined' size='small' type='number' label='Sun' />
                    </TextFieldGroupContainer>
                   
    
                    <Button onClick={handleSaveClick} mt={"2rem"} variant='outlined'>Submit</Button>
    
    
    
                </Box>
    
    
            </Dialog>
        )
    }

   
}

export default SubmitTimesheetPopup