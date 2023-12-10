import { Box, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import format from 'date-fns/format'
import dayjs from 'dayjs'
import TimeSheetTable from '../MyTimesheet/TimeSheetTable'
import { getWeekDateRange } from '../../../Utils/dateUtils'
import AllTsListTable from './AllTsListTable'
import { Typography } from '@mui/material'
import { Stack } from '@mui/system'

const cols = ['Day', 'Regular', 'Double Time', 'Over Time', 'Expenses', 'Status']

const ApproveDashboard = ({ candidate, setCandidate }) => {


  const [selectedDate, setSelectedDate] = useState(dayjs(format(Date.now(), 'yyyy-MM-dd')))
  const [dateRange, setDateRange] = useState(getWeekDateRange(selectedDate, 'mon'))

  useEffect(() => {
    setDateRange(getWeekDateRange(selectedDate, 'mon'))
  }, [selectedDate])

  return (
    <Box sx={{
      backgroundColor: 'var(--white)',
      padding: '2rem',
      borderRadius: '1rem',
      height: 'max-content',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    }}>

      {candidate != null ?
        <Stack direction={'row'} alignItems={'center'}>
          <IconButton size='small' onClick={() => setCandidate(null)}>
            <span class="material-symbols-outlined">
              arrow_back_ios
            </span>
          </IconButton>
          <Typography variant='h6'>{candidate.name}'s Timesheets</Typography>
        </Stack> : <Typography variant='h6'>All Timesheets</Typography>}


      <AllTsListTable candidate={candidate} />

      {/* <TimeSheetTable  cols={cols} dateRange={dateRange}/> */}


    </Box>
  )
}

export default ApproveDashboard