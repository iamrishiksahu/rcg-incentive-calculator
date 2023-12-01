import { Box, Button } from '@mui/material'
import React, { useEffect } from 'react'
import TimeSheetTable from './TimeSheetTable'
import usePageTitle from '../../../hooks/usePageTitle'

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



const MyTimeSheet = () => {

  const { setTitle } = usePageTitle()

  useEffect(() => {
    setTitle('My Timesheet')
  }, [])

  return (
    <Box sx={{
      paddingX: '2rem',
    }}>




      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '1rem'
      }}>

        <Box
          sx={{
            display: 'center',
            alignItems: 'center'
          }}>

          Current Week: Nov 20, 2023 to Nov 26, 2023
        </Box>

        <Box sx={{display: 'flex', gap: '1rem'}}>
          <Button
            onClick={() => window.print()}
            sx={{
              textTransform: 'none',
              display: 'flex',
              gap: '0.5rem'
            }}>
            <span class="material-symbols-outlined">
              print
            </span>

            Print</Button>

          <Button
            sx={{
              textTransform: 'none',
              display: 'flex',
              gap: '0.5rem'
            }}>
            <span class="material-symbols-outlined">
              forward_to_inbox
            </span>

            Email  </Button>

        </Box>



      </Box>

      <TimeSheetTable rows={rows} cols={cols} />

    </Box>
  )
}

export default MyTimeSheet