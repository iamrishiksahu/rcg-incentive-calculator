import { Box, Button, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TimeSheetTable from './TimeSheetTable'
import usePageTitle from '../../../hooks/usePageTitle'
import DateWeekPicker from '../../../CustomElements/DateRangePicker/DateRangePicker'
import { Typography } from '@mui/material'
import dayjs from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers'
import { getWeekDateRange } from '../../../Utils/dateUtils'
import { format } from 'date-fns'

const cols = ['Day', 'Regular', 'Double Time', 'Over Time', 'Expenses', 'Status']

const rows = [
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

  const { setTitleProps } = usePageTitle()

  const [selectedDate, setSelectedDate] = useState(dayjs(format(Date.now(), 'yyyy-MM-dd')))
  const [dateRange, setDateRange] = useState(getWeekDateRange(selectedDate, 'mon'))

  useEffect(() => {
    setDateRange(getWeekDateRange(selectedDate, 'mon'))
  }, [selectedDate])
  

  useEffect(() => {
    setTitleProps({title:'My Timesheet'})
  }, [])

  return (
    <Box sx={{
      paddingX: '2rem',
      display: 'flex',
      gap: '2rem'
    }}>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>

        <Paper sx={{
          paddingRight: '1rem',
        }}>
          <DateCalendar
            showDaysOutsideCurrentMonth
            value={selectedDate} onChange={(val) => setSelectedDate(val)} />
        </Paper>

        <Paper sx={{
          padding: '1rem'
        }}>

          <Typography variant='h6' >Holidays</Typography>
          <Typography variant='body1' >No Holidays This Month!</Typography>
        </Paper>

        <Paper sx={{
          padding: '1rem'
        }}>

          <Typography variant='h6' >Clarifications</Typography>
          <Typography variant='body1' >No Clarification Requests!</Typography>
        </Paper>



      </Box>

      <Box sx={{ width: '100%' }}>

        <Paper sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '1rem',
          backgroundColor: 'var(--white)',
          padding: '.5492rem 1rem',
          borderRadius: '0.25rem',
          // marginBottom: '-0rem',
          // borderRadius: 0
        }}>

          <Box
            sx={{
              display: 'center',
              alignItems: 'center'
            }}>

            <Typography variant='body1' sx={{
              backgroundColor: 'var(--color-primary-light)',
              color: 'var(--color-text-1)',
              padding: '0.25rem 1rem',
              borderRadius: '1rem'
            }}>

              Selected Week: <span style={{fontWeight: '500'}}>{dateRange?.startOfWeek + ' to ' + dateRange?.endOfWeek}</span>
            </Typography>



          </Box>

          <Box sx={{ display: 'flex', gap: '1rem' }}>
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



        </Paper>

        <TimeSheetTable  source={'CANDIDATE'} dateRange={dateRange}/>
      </Box>


    </Box>
  )
}

export default MyTimeSheet