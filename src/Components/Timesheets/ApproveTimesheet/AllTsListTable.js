import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const columns = [
  { id: 'name', label: 'Name', width: 130 },
  { id: 'department', label: 'Department',  width: 130 },
  { id: 'company', label: 'Company',  width: 130  },
  {
    id: 'week_ending',
    label: 'Week Ending',
    width: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'total_hours',
    label: 'Total Hours',
    width: 170,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'submitted_at',
    label: 'Submitted At',
    width: 180,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    width: 10,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },

];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'rejected',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  },{
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'rejected',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  },{
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'rejected',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  },{
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'rejected',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  },{
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'rejected',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '10-Dec-2023',
    status: 'pending',
    submitted_at: dayjs(Date.now()).format('DD-MMM-YYYY HH:MM:A'),
    company: 'Rapid Tech Serv.',
  },
];

export default function AllTsListTable({selectedCandidate}) {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  const navigate = useNavigate()

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleTimesheetItemClick = (row) => {

    navigate(`/dashboard/approve-timesheet/${row.name}/${row.week_ending}`)

  }

  const renderStatus = (status) => {
    const bgColor =
      status == 'pending' ? 'var(--color-warning-bg)'
        : status == 'approved' ? 'var(--color-success-bg)'
          : status == 'clarification' ? 'var(--color-warning-bg)'
            : status == 'rejected' ? 'var(--color-primary-light)'
              : 'var(--color-info-dark)';

    console.log(bgColor)
    return (
      <Typography sx={{
        backgroundColor: bgColor,
        borderRadius: '2rem',
        margin: 'auto',
        width: 'max-content',
        padding: '0.25rem 1rem',
        textAlign: 'center',
        textTransform: 'capitalize'
      }} variant='body2' align='center'>
        {status}
      </Typography >
    )
  }
return (
  <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer component={Box} sx={{ maxHeight: 440}}>
      <Table >
        <TableHead>
          <TableRow>
          {columns.map((column) => (
              <TableCell
                align={column.align}
                style={{ width: column.width }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
        {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => {
              return (
                <TableRow
                sx={{
                  cursor: 'pointer'
                }}
                onClick={() => handleTimesheetItemClick(row)}
                hover role="checkbox" tabIndex={-1} key={row.code}>

                  <TableCell align={columns[0].align}>{row.name}</TableCell>
                  <TableCell align={columns[1].align}>{row.department}</TableCell>
                  <TableCell align={columns[2].align}>{row.company}</TableCell>
                  <TableCell align={columns[3].align}>{row.week_ending}</TableCell>
                  <TableCell align={columns[4].align}>{row.total_hours}</TableCell>
                  <TableCell align={columns[5].align}>{row.submitted_at}</TableCell>
                  <TableCell align={columns[6].align}>{renderStatus(row.status)}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, 100]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
);
}
