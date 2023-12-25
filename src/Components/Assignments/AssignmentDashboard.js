import { Box, Button, CircularProgress, TextField, Typography, InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axiosp from '../../Utils/axiosConfig'
import { useNavigate } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import AssignmentDashboardTable from './AssignmentDashboardTable'
import { Stack } from '@mui/system'
import IconContainer from '../../CustomElements/Containers/IconContainer'
import FlexBox from '../../CustomElements/Containers/FlexBox'
import useToast from '../../customHooks/useToast'

const dummyData = [{
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
  job_title: 'Python Developer',
  working_state: 'Jharkhand',
  assignment_division: 'IT',
  client_contact: 'Bhavya B.',
  primary_recruiter: 'Ravi K V',
  primary_sales: '34',
  start_entered: '24-11-2000',
  optional_ref: '124582',
  spread: '$10'
},]

const AssignmentDashboard = () => {

  const { setTitleProps } = usePageTitle()
  const [isLoading, setIsLoading] = useState(false)
  const [searchString, setSearchString] = useState('')

  const [data, setData] = useState([
  ])

  const { setToast } = useToast()

  const loadAllCandidates = async () => {
    try {
      // const res = await axiosp.get('/candidate_details')
      const res = await axiosp.get('/dashboard/assignment_dashboard/')
      console.log(res.data)
      const data = res.data.contacts.map((item) => {
        return { name: item.candidate_firstname + " " + item.candidate_last_name, ...item.job, id: item.id }
      })
      setData(data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const searchCandidates = async (e) => {
    e.preventDefault()

    if (searchString == '') {
      // The query is an empty string, we want to show all candidates
      await loadAllCandidates()
      return
    }

    try {
      const res = await axiosp.get(`search_contact_by_sequence/?sequence=${searchString}`)
      const data = res.data.map((item) => {
        return { ...item, name: item.first_name + ' ' + item.last_name }
      })
      setData(data)

    } catch (err) {
      console.log(err)
      setToast({ type: 'error', message: 'Unable to search candidates!' })
    }
  }

  useEffect(() => {
    loadAllCandidates()
    setTitleProps({ title: 'Assignment Dashboard' })

  }, [])


  return (
    <Box sx={{
      padding: '2rem',
      paddingTop: '0'
    }}>


      {/* <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', padding: '1rem' }}> */}

      <FlexBox sx={{
        flexWrap: 'wrap',
      }}>

        <form
          onSubmit={searchCandidates}
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--color-white)',
            borderRadius: '0.5rem 0.5rem 0 0',
          }}>

          <Typography variant='h6'>Candidate Assignment</Typography>

          <Stack direction={'row'} spacing={'1rem'} width={'50%'} justifyContent={'flex-end'}>

            <TextField
              variant='outlined'
              size='small'
              placeholder='Candidate name'
              onChange={(e) => setSearchString(e.target.value)}
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


        {isLoading || !data
          ? <CircularProgress />
          : data ?
            <AssignmentDashboardTable data={data} />
            : <></>

        }
      </FlexBox>


      {/* </Box> */}


    </Box>
  )
}

export default AssignmentDashboard