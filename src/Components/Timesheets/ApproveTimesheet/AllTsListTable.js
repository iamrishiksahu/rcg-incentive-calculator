import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'department', label: 'Department', minWidth: 100 },
  {
    id: 'week_ending',
    label: 'Week Ending',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'total_hours',
    label: 'Total Hours',
    minWidth: 170,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
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
    week_ending: '08-Dec-2024',
    status: 'approved'
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '08-Dec-2024',
    status: 'submitted'
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '08-Dec-2024',
    status: 'rejected'
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '08-Dec-2024',
    status: 'submitted'
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '08-Dec-2024',
    status: 'submitted'
  }, {
    name: 'Rishik Sahu',
    department: 'IT',
    total_hours: '40',
    week_ending: '08-Dec-2024',
    status: 'submitted'
  },
];

export default function AllTsListTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const renderStatus = (status) => {
    const bgColor =
      status == 'submitted' ? 'var(--color-warning-bg)'
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
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
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
                onClick={() => {alert(JSON.stringify(row))}}
                hover role="checkbox" tabIndex={-1} key={row.code}>

                  <TableCell align={columns[0].align}>{row.name}</TableCell>
                  <TableCell align={columns[1].align}>{row.department}</TableCell>
                  <TableCell align={columns[2].align}>{row.week_ending}</TableCell>
                  <TableCell align={columns[3].align}>{row.total_hours}</TableCell>
                  <TableCell align={columns[4].align}>{renderStatus(row.status)}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
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
