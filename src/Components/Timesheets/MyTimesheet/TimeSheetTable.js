import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, TableHead, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useNavigate } from 'react-router-dom';
import SubmitTimesheetPopup from './SubmitTimesheetPopup';
import dayjs from 'dayjs';
import { getDayShortName } from '../../../Utils/dateUtils';
import { useEffect } from 'react';


const getNthDay = (currDay, n) => {

    const currentDate = new Date(currDay);
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + n);
    return [nextDate, nextDate.getDay()]

}

const TimeSheetTable = ({ rows, cols, dateRange }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [open, setOpen] = React.useState(false)
    const [rowData, setRowData] = React.useState(null)

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
            status: 'Submitted'
        }

        )
    }






    console.log(dateDayArray)



    console.log(rowsData)

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

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                <TableHead>
                    <TableRow >
                        {cols.map((item, idx) => (
                            <TableCell key={idx} sx={{ fontWeight: '600' }}
                                align={idx == 3 || idx == 4 ? 'center' : 'inherit'}
                            >
                                {item}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                        {(rowsData).map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell width='120px' component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell component="th" scope="row" >
                                    {row.regular}
                                </TableCell>
                                <TableCell   >
                                    {row.doubletime}
                                </TableCell>
                                <TableCell  >
                                    {row.overtime}
                                </TableCell>
                                <TableCell  >
                                    {row.expenses}
                                </TableCell>
                                <TableCell align='center'>
                                    {renderTimesheetStatus(row)}

                                </TableCell>
                            </TableRow>
                        ))}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                {/* <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 15, 20, 25, { label: 'All', value: 1 }]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter> */}
            </Table>
        </TableContainer>

        <SubmitTimesheetPopup open={open} setOpen={setOpen} rowData={rowData} />
    </>
    );
}
export default TimeSheetTable