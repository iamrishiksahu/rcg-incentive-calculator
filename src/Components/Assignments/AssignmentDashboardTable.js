import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const data = [{
  candidate_first_name: 'Rishik',
  candidate_last_name: 'Sahu',
  bill_start: '22-10-2023',
  bill_end: '22-10-2023',
  assignment_status: 'Assigned',
  job_title: 'Web Developer',
  working_state: 'Jharkhand',
  assignment_division: 'IT',
  client_contact: 'Bhavya B.',

},{
  candidate_first_name: 'Rishik',
  candidate_last_name: 'Sahu',
  bill_start: '22-10-2023',
  pay_start: '22-10-2023',
  bill_end: '22-10-2023',
  pay_end: '22-10-2023',
  assignment_status: 'Assigned',
  job_title: 'Web Developer',
  working_state: 'Jharkhand',
  assignment_division: 'IT',
  client_contact: 'Bhavya B.',

},{
  candidate_first_name: 'Rishik',
  candidate_last_name: 'Sahu',
  bill_start: '22-10-2023',
  pay_start: '22-10-2023',
  bill_end: '22-10-2023',
  pay_end: '22-10-2023',
  assignment_status: 'Assigned',
  job_title: 'Web Developer',
  working_state: 'Jharkhand',
  assignment_division: 'IT',
  client_contact: 'Bhavya B.',

},{
  candidate_first_name: 'Rishik',
  candidate_last_name: 'Sahu',
  bill_start: '22-10-2023',
  pay_start: '22-10-2023',
  bill_end: '22-10-2023',
  pay_end: '22-10-2023',
  assignment_status: 'Assigned',
  job_title: 'Web Developer',
  working_state: 'Jharkhand',
  assignment_division: 'IT',
  client_contact: 'Bhavya B.',

},{
  candidate_first_name: 'Rishik',
  candidate_last_name: 'Sahu',
  bill_start: '22-10-2023',
  pay_start: '22-10-2023',
  bill_end: '22-10-2023',
  pay_end: '22-10-2023',
  assignment_status: 'Assigned',
  job_title: 'Web Developer',
  working_state: 'Jharkhand',
  assignment_division: 'IT',
  client_contact: 'Bhavya B.',
  
},
]

const rows = data.map((item) => {
  return {...item, name: item.candidate_first_name + " " + item.candidate_last_name}
})

const AssignmentDashboardTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{
                position: 'sticky',
                left: 0,
                background: '#f0f0f0',
                minWidth: '200px',
            }}>Candidate Name</TableCell>
            <TableCell align="center" sx={{minWidth: '130px'}}>Bill Start</TableCell>
            <TableCell align="center" sx={{minWidth: '130px'}}>Bill End</TableCell>
            <TableCell align="center" sx={{minWidth: '100px'}}>Pay Start</TableCell>
            <TableCell align="center" sx={{minWidth: '100px'}}>Pay End</TableCell>
            <TableCell align="center" sx={{minWidth: '150px'}}>Assignment Status</TableCell>
            <TableCell align="center" sx={{minWidth: '100px'}}>Job Title</TableCell>
            <TableCell align="center" sx={{minWidth: '100px'}}>Division</TableCell>
            <TableCell align="center" sx={{minWidth: '150px'}}>Working State</TableCell>
            <TableCell align="center" sx={{minWidth: '150px'}}>Client Contact</TableCell>
            <TableCell align="center" sx={{minWidth: '150px'}}>Primary Recruiter</TableCell>
            <TableCell align="center" sx={{minWidth: '150px'}}>Primary Sales</TableCell>
            <TableCell align="center" sx={{minWidth: '150px'}}>Start Entered</TableCell>
            <TableCell align="center" sx={{minWidth: '100px'}}>Reference</TableCell>
center
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
                background: '#f0f0f0',
                
              }}>
                {row.name}
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AssignmentDashboardTable