import React, {useRef, useState} from 'react';
import { Button, Fab, Stack, TableHead, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import SubmitTimesheetPopup from './SubmitTimesheetPopup';
import dayjs from 'dayjs';
import { getDayShortName } from '../../../Utils/dateUtils';
import { TextFieldGroupContainer } from '../../../CustomElements/Containers/TexFieldGroupContainer';


const getNthDay = (currDay, n) => {

    const currentDate = new Date(currDay);
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + n);
    return [nextDate, nextDate.getDay()]

}

const holidayList = [
    '23-01-2024'
]

const TimeSheetTable = ({ rows, cols, dateRange }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [open, setOpen] = React.useState(false)
    const [rowData, setRowData] = React.useState(null)
    const [fileAttachment, setFileAttachment] = useState(null)
    
    const additionalDetailsAttachementRef = useRef()

    const handleFileSelect =(e)=>{
        const file = e.target.files[0]
        setFileAttachment(file)
    }
    const dateDayArray = []
    const rowsData = []


    for (let i = 0; i < 7; i++) {
        const nthDay = getNthDay(dateRange.startOfWeek, i)
        dateDayArray.push({

            date: dayjs(nthDay[0]).format('DD-MM-YYYY'),
            day: getDayShortName(nthDay[1])
        }
        )
    }


    for (let i = 0; i < 7; i++) {
        rowsData.push({
            date: dateDayArray[i].date,
            day: dateDayArray[i].day,
            regular: <TextField
                name={`tf_regular_${i}`}
                variant='outlined'
                type='number'
                placeholder={dateDayArray[i].day}
                size='small'

            />,
            overtime: <TextField
                name={`tf_overtime_${i}`}
                variant='outlined'
                type='number'
                placeholder={dateDayArray[i].day}
                size='small'

            />,
            doubletime: <TextField
                name={`tf_doubletime_${i}`}
                variant='outlined'
                type='number'
                placeholder={dateDayArray[i].day}
                size='small'

            />,
            expenses: <TextField
                name={`tf_expenses_${i}`}
                variant='outlined'
                type='number'
                placeholder={dateDayArray[i].day}
                size='small'

            />,
            status: 'Not Submitted'
        }

        )
    }

    const navigate = useNavigate()

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleSubmitTimeSheet = (row) => {
        // navigate(`/submit-timesheet/${JSON.stringify(row)}`)
        setOpen(true) // open the submit timesheet dialog
        setRowData(row)
    }

    const renderTimesheetStatus = (row) => {
        if (row.status == 'Submitted') {
            return (
                <Typography sx={{
                    backgroundColor: '#fff4e5',
                    padding: '0 0.5rem',
                    color: '#663c00',
                    fontSize: '0.9rem',
                    borderRadius: '1rem',
                    maxWidth: 'max-content',
                    margin: 'auto'
                }}

                >
                    Submitted
                </Typography>
            )
        } else if (row.status == 'Not Submitted') {
            return (<Button sx={{
                paddingY: '0rem'
            }}
                onClick={() => handleSubmitTimeSheet(row)}
            >
                Submit
            </Button>
            )
        } else {
            <>Invalid Status</>
        }

    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (<>

        <form>
            <Paper sx={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ marginBottom: '0.5rem', marginTop: '-0.5rem' }} >
                    <Typography variant='h6'>Enter Timesheet</Typography>

                    <Stack direction={'row'}>

                        <Button variant='text'>Reset</Button>
                        <Button variant='outlined'>Submit</Button>

                    </Stack>

                </Stack>

                <TextFieldGroupContainer cols={'1.2fr repeat(7, 1fr)'} sx={{
                    alignItems: 'center',
                    gap: '1rem',
                    backgroundColor: 'var(--color-main-bg)',
                    padding: '0.25rem 0rem',
                    borderRadius: '0.5rem'
                }} direction='row'>
                    <Typography></Typography>
                    {rowsData.map((item, idx) => {
                        return (
                            <Typography key={idx} align='center'
                                color={'var(--color-info-dark)'}
                            >
                                {item.date.substring(0, 5)}
                            </Typography>
                        )
                    })}

                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols={'1.2fr repeat(7, 1fr)'} sx={{
                    borderBottom: '1px solid var(--color-info-light)',
                    paddingBottom: '1rem',
                    alignItems: 'center',
                    gap: '1rem'
                }} direction='row'>
                    <Typography>Regular</Typography>

                    {rowsData.map((item, idx) => {
                        return (
                            <TextField key={idx} size='small' variant='outlined' name={`tf_regular_${idx}`} placeholder={item.day} disabled={(item.day == 'Sat' || item.day == 'Sun' || holidayList.includes(item.date)) ? true : false} />
                        )
                    })}

                </TextFieldGroupContainer>

                <TextFieldGroupContainer cols={'1.2fr repeat(7, 1fr)'} sx={{
                    borderBottom: '1px solid var(--color-info-light)',
                    paddingBottom: '1rem',
                    alignItems: 'center',
                    gap: '1rem'
                }} direction='row'>
                    <Typography>Over Time</Typography>
                    {rowsData.map((item, idx) => {
                        return (
                            <TextField key={idx} size='small' variant='outlined' name={`tf_overtime_${idx}`} placeholder={item.day} disabled={(item.day == 'Sat' || item.day == 'Sun' || holidayList.includes(item.date)) ? true : false} />
                        )
                    })}
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols={'1.2fr repeat(7, 1fr)'} sx={{
                    borderBottom: '1px solid var(--color-info-light)',
                    paddingBottom: '1rem',
                    alignItems: 'center',
                    gap: '1rem'
                }} direction='row'>
                    <Typography>Double Time</Typography>
                    {rowsData.map((item, idx) => {
                        return (
                            <TextField key={idx} size='small' variant='outlined' name={`tf_doubletime_${idx}`} placeholder={item.day}
                                disabled={(item.day == 'Sat' || item.day == 'Sun' || holidayList.includes(item.date)) ? true : false} />
                        )
                    })}
                </TextFieldGroupContainer>
                <TextFieldGroupContainer cols={'1.2fr repeat(7, 1fr)'} sx={{

                    alignItems: 'center',
                    gap: '1rem'
                }} direction='row'>
                    <Typography>Expenses</Typography>
                    {rowsData.map((item, idx) => {
                        return (
                            <TextField key={idx} size='small' variant='outlined' name={`tf_expenses_${idx}`} placeholder={item.day}
                                disabled={(item.day == 'Sat' || item.day == 'Sun' || holidayList.includes(item.date)) ? true : false}
                            />
                        )
                    })}

                </TextFieldGroupContainer>

                <Stack sx={{ marginTop: '2rem' }} direction={'row'} justifyContent={'space-between'}>


                    <Typography >Additional Details</Typography>


                    <Stack
                        sx={{
                            color: 'var(--color-primary-dark)',
                            cursor: 'pointer',
                            transition: 'all 100ms ease',
                            '&:hover': {
                                transform: 'scale(1.07)'
                            }
                        }}
                        onClick={() => additionalDetailsAttachementRef.current.click()}
                        direction={'row'} spacing={'0.5rem'} alignItems={'center'}>

                        {fileAttachment? <Typography color={'var(--color-text-2)'} fontSize={'0.9rem'}>{fileAttachment.name}</Typography>: null}

                        <span class="material-symbols-outlined">
                            attachment
                        </span>
                        <Typography>Attach</Typography>
                         {/* Hidden file input */}
                        <input
                            type="file"
                            ref={additionalDetailsAttachementRef}
                            style={{ display: 'none' }}
                            onChange={handleFileSelect}
                        />

                    </Stack>
                </Stack>
                <TextField variant='outlined' size='small' placeholder='Enter details (if any)' minRows={'3'} multiline type='text' />



            </Paper>
        </form>


        <SubmitTimesheetPopup open={open} setOpen={setOpen} rowData={rowData} />
    </>
    );
}
export default TimeSheetTable