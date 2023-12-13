import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './AssignmentDashboardTable.css'
import { Link, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
// import { Table } from 'antd';


const AssignmentDashboardTable = ({ data }) => {


  const rows = data.map((item) => {
    return { ...item, name: item.candidate_first_name + " " + item.candidate_last_name }
  })

  return (
    // <Table columns={columns} dataSource={dataSource}

    //   scroll={{
    //     x: 1500,
    //     y: 300,
    //   }}
    // />
    <TableContainer component={Paper} className='table-container'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow sx={{ background: '#fff0f0',}}>
            <TableCell sx={{
              position: 'sticky',
              left: 0,
              background: '#fff0f0',
              minWidth: '200px',
            }}>Candidate Name</TableCell>
            <TableCell align="center" sx={{ minWidth: '120px' }}>Bill Start</TableCell>
            <TableCell align="center" sx={{ minWidth: '120px' }}>Bill End</TableCell>
            <TableCell align="center" sx={{ minWidth: '120px' }}>Pay Start</TableCell>
            <TableCell align="center" sx={{ minWidth: '120px' }}>Pay End</TableCell>
            <TableCell align="center" sx={{ minWidth: '150px' }}>Assignment Status</TableCell>
            <TableCell align="center" sx={{ minWidth: '100px' }}>Job Title</TableCell>
            <TableCell align="center" sx={{ minWidth: '100px' }}>Division</TableCell>
            <TableCell align="center" sx={{ minWidth: '150px' }}>Working State</TableCell>
            <TableCell align="center" sx={{ minWidth: '150px' }}>Client Contact</TableCell>
            <TableCell align="center" sx={{ minWidth: '150px' }}>Primary Recruiter</TableCell>
            <TableCell align="center" sx={{ minWidth: '150px' }}>Primary Sales</TableCell>
            <TableCell align="center" sx={{ minWidth: '100px' }}>Spread</TableCell>
            <TableCell align="center" sx={{ minWidth: '150px' }}>Start Entered</TableCell>
            <TableCell align="center" sx={{ minWidth: '120px' }}>Optional Ref #</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{
                position: 'sticky',
                left: 0,
                backgroundColor: '#fafafa',
              }}>

                <Link style={{color: 'rgba(0, 0, 0, 0.87)'}} to={(`/dashboard/add-assignment/${row?.id}`)} >
                  {row.name}

                </Link>
              </TableCell>
              <TableCell align="center">{row.bill_start}</TableCell>
              <TableCell align="center">{row.bill_end}</TableCell>
              <TableCell align="center">{row.pay_start}</TableCell>
              <TableCell align="center">{row.pay_end}</TableCell>
              <TableCell align="center">{row.assignment_status}</TableCell>
              <TableCell align="center">{row.job_title}</TableCell>
              <TableCell align="center">{row.assignment_division}</TableCell>
              <TableCell align="center">{row.working_state}</TableCell>
              <TableCell align="center">{row.client_contact}</TableCell>
              <TableCell align="center">{row.primary_recruiter}</TableCell>
              <TableCell align="center">{row.primary_sales}</TableCell>
              <TableCell align="center">{row.spread}</TableCell>
              <TableCell align="center">{row.start_entered}</TableCell>
              <TableCell align="center">{row.optional_ref}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AssignmentDashboardTable