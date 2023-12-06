import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axiosp from '../../Utils/axiosConfig'
import { useNavigate } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import AssignmentDashboardTable from './AssignmentDashboardTable'

const AssignmentDashboard = () => {

  const { setTitle } = usePageTitle()
  const [isLoading, setIsLoading] = useState(false)

  const [data, setData] = useState([{
    id: '1',
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
    primary_recruiter: 'Ravi K V',
    primary_sales: '34',
    start_entered: '24-11-2000',
    optional_ref: '124582',
    spread: '$10'
  }, {
    id: '1',
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
    primary_recruiter: 'Ravi K V',
    primary_sales: '34',
    start_entered: '24-11-2000',
    optional_ref: '124582',
    spread: '$10'
  }, {
    id: '1',
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
    primary_recruiter: 'Ravi K V',
    primary_sales: '34',
    start_entered: '24-11-2000',
    optional_ref: '124582',
    spread: '$10'
  }, {
    id: '1',
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
    primary_recruiter: 'Ravi K V',
    primary_sales: '34',
    start_entered: '24-11-2000',
    optional_ref: '124582',
    spread: '$10'
  }, {
    id: '1',
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
    primary_recruiter: 'Ravi K V',
    primary_sales: '34',
    start_entered: '24-11-2000',
    optional_ref: '124582',
    spread: '$10'
  },
  ])

  const navigate = useNavigate()

  const handleSearch = async (e) => {
    e.preventDefault()

    setIsLoading(true)
    try {

      const searchTxt = e.target.search_field.value;
      const res = await axiosp.get(`/search_contact_by_sequence/?sequence=${searchTxt}`)

      alert(searchTxt)
      console.log(res.data)
      setData(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }



  const loadCandidates = async () => {
    try {
      const res = await axiosp.get('/candidate_details')
      console.log(res.data)
      setData(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadCandidates()
    setTitle('Assignment Dashboard')

  }, [])


  return (
    <Box sx={{
      padding: '2rem'
    }}>

      <form
        onSubmit={handleSearch}
        style={{
          marginBottom: '2rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center'
        }}>

        <TextField
          variant="outlined"
          size="small"
          placeholder="Search Candiate..."
          name='search_field'
          sx={{
            width: '24%',
            "& fieldset": { border: 'none' },
            borderRadius: "2rem",
            backgroundColor: "white",
            boxShadow: '0 0 1rem 0.25rem rgba(0,0,0,0.03)'
          }}
          onKeyDown={(key) => {
            if (key.code == "Enter") {
              //add to the list
              // handleEnter({ action: 1 });
            }
          }} />

        <Button type='submit' sx={{ borderRadius: '1.5rem' }} variant='outlined'>
          Search

        </Button>



      </form>

      <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>



        {isLoading || !data
          ? <CircularProgress />
          : data ?
            <AssignmentDashboardTable data={data} />
            : <></>

        }

      </Box>


    </Box>
  )
}

export default AssignmentDashboard