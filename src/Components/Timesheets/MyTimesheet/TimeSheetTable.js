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
import { Button, TableHead, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useNavigate } from 'react-router-dom';
import SubmitTimesheetPopup from './SubmitTimesheetPopup';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};


const cols = ['Week Start', 'Week End', 'Project', 'Total Hours', 'Status']

const rows = [
    {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    },
    {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    }, {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    }, {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    }, {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    }, {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    }, {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    }, {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    }, {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    }, {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    }, {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    }, {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    }, {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    },
    {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    },
    {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    },
    {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    },
    {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Submitted',
    },
    {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Not Submitted',
    },
    {
        week_start: '20-11-2023',
        week_end: '26-11-2023',
        project_name: 'IC App Project',
        hours_worked: 40,
        status: 'Not Submitted',

    },


].sort((a, b) => (a.status < b.status ? -1 : 1));





const TimeSheetTable = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(15);
    const [open, setOpen] = React.useState(false)
    const [rowData, setRowData] = React.useState(null)

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
                    {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                    ).map((row) => (
                        <TableRow key={row.week_start}>
                            <TableCell component="th" scope="row">
                                {row.week_start}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.week_end}
                            </TableCell>
                            <TableCell  >
                                {row.project_name}
                            </TableCell>
                            <TableCell align='center' >
                                {row.hours_worked}
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
                <TableFooter>
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
                </TableFooter>
            </Table>
        </TableContainer>

        <SubmitTimesheetPopup open={open} setOpen={setOpen} rowData={rowData} />
    </>
    );
}
export default TimeSheetTable