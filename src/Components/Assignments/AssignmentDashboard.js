import { Box, Button, CircularProgress, TextField, Typography, InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axiosp from '../../Utils/axiosConfig'
import { useNavigate } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import AssignmentDashboardTable from './AssignmentDashboardTable'
import { Stack } from '@mui/system'
import IconContainer from '../../CustomElements/Containers/IconContainer'

const AssignmentDashboard = () => {

  const { setTitleProps } = usePageTitle()
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
    setTitleProps({ title: 'Assignment Dashboard' })

  }, [])


  return (
    <Box sx={{
      padding: '2rem',
      paddingTop: '0'
    }}>

      <form
        onSubmit={handleSearch}
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--color-white)',
          padding: '1rem',
          borderRadius: '0.5rem 0.5rem 0 0',

        }}>

        <Typography variant='h6'>Candidate List</Typography>

        <Stack direction={'row'} spacing={'1rem'} width={'50%'} justifyContent={'flex-end'}>

          <TextField
            variant='outlined'
            size='small'
            placeholder='Candidate name'
            InputProps={{

              startAdornment: (
                <InputAdornment position="start">

                  <IconContainer sx={{ marginTop: '3px' }} size={'1rem'} icon={'search'} />

                </InputAdornment>
              ), endAdornment: (
                <InputAdornment position="end">

                  <Button type='submit' variant='text'>search</Button>

                </InputAdornment>
              ),
            }}
            sx={{
              top: '0px',
              background: 'var(--color-white)',
            }}

          />
        </Stack>




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