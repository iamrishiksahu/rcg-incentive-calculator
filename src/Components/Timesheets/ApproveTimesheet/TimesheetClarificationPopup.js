import * as React from 'react';
import { Button, TextField, Box, Stack, Checkbox, Typography, FormControlLabel, Autocomplete, DialogContent, DialogContentText, TextareaAutosize, DialogActions } from '@mui/material'
import { TextFieldGroupContainer } from '../../../CustomElements/Containers/TexFieldGroupContainer'
import { DatePicker } from '@mui/x-date-pickers'
import { useRef, useState } from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { DummyWorkList } from '../../../Utils/constants'

const emails = ['username@gmail.com', 'user02@gmail.com'];

const TimesheetClarificationPopup = ({ open, setOpen, rowData }) => {

    const clarificationMessageRef = useRef()

    const [calirifationFieldError, setClarificationFieldError] = useState(null)

    const handleSaveClick = (e) => {
        e.preventDefault()
        const msg = clarificationMessageRef.current.value
        console.log(msg)

        if(!msg){
            setClarificationFieldError('Please enter a message!')
            return
        }
        setClarificationFieldError(null)
       

        setOpen(false)

    }


    const handleClose = () => {
        setClarificationFieldError(null)
        setOpen(false)
    };


    // if(rowData){
    return (
        <Dialog onClose={handleClose} open={open} >

            <DialogTitle>Request Clarification</DialogTitle>

            <DialogContent>
                <Stack>
                    <TextField multiline minRows={5} 
                    inputRef={clarificationMessageRef}
                    error={calirifationFieldError? true: false}
                    helperText={calirifationFieldError}
                    placeholder='Enter clarification message...' 
                    sx={{
                        minWidth: '440px'
                    }} />
                </Stack>
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'flex-end' }}>
                <Button
                    onClick={handleSaveClick}
                    color={'primary'}
                    variant='contained' 
                    sx={{
                        textTransform: 'none',
                        mr: '1rem'
                    }}>
                    Send
                    <span class="material-symbols-outlined" style={{fontSize: '1rem', marginLeft: '0.5rem'}}>
                        send
                    </span>

                </Button>
            </DialogActions>


        </Dialog>
    )
    // }


}

export default TimesheetClarificationPopup