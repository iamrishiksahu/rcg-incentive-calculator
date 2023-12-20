import { Box, Button, Paper } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import TimeSheetTable from './TimeSheetTable'
import usePageTitle from '../../../hooks/usePageTitle'
import DateWeekPicker from '../../../CustomElements/DateRangePicker/DateRangePicker'
import { Typography } from '@mui/material'
import dayjs from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers'
import { getWeekDateRange } from '../../../Utils/dateUtils'
import { format } from 'date-fns'
import FlexBox from '../../../CustomElements/Containers/FlexBox'
import axiosp from '../../../Utils/axiosConfig'
import ToastContext from '../../../context/ToastProvider'
import useToast from '../../../customHooks/useToast'

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

  const reqObj = {
    week_starting: 'asd',
    week_ending: 'asd',
    submitted_time: '20:20:20:20:20',
    user_id: 'user',
    types: ['regular', 'over_time', 'double_time', 'expenses'],
    regular: {
      mon: '8',
      tue: '9',
      wed: '3'
    },
    over_time: {
      mon: '8',
      tue: '9',
      wed: '3'
    },
    double_time: {
      mon: '8',
      tue: '9',
      wed: '3'
    },
    expenses: {
      mon: '8',
      tue: '9',
      wed: '3'
    },
    additional_details: {
      details: 'asdfasfasdf',
      attachment_url: 'asdf',
      attachment_name: 'sadfas',
    },

  }


  const { setToast } = useToast()

  const validateFormEntries = (e) => {

    try {

      const regular = {
        mon: e.target.tf_regular_0.value || 0,
        tue: e.target.tf_regular_1.value || 0,
        wed: e.target.tf_regular_2.value || 0,
        thu: e.target.tf_regular_3.value || 0,
        fri: e.target.tf_regular_4.value || 0,
        sat: e.target.tf_regular_5.value || 0,
        sun: e.target.tf_regular_6.value || 0,
      }
      const overTime = {
        mon: e.target.tf_overtime_0.value || 0,
        tue: e.target.tf_overtime_1.value || 0,
        wed: e.target.tf_overtime_2.value || 0,
        thu: e.target.tf_overtime_3.value || 0,
        fri: e.target.tf_overtime_4.value || 0,
        sat: e.target.tf_overtime_5.value || 0,
        sun: e.target.tf_overtime_6.value || 0,
      }
      const doubleTime = {
        mon: e.target.tf_doubletime_0.value || 0,
        tue: e.target.tf_doubletime_1.value || 0,
        wed: e.target.tf_doubletime_2.value || 0,
        thu: e.target.tf_doubletime_3.value || 0,
        fri: e.target.tf_doubletime_4.value || 0,
        sat: e.target.tf_doubletime_5.value || 0,
        sun: e.target.tf_doubletime_6.value || 0,
      }
      const expenses = {
        mon: e.target.tf_expenses_0.value || 0,
        tue: e.target.tf_expenses_1.value || 0,
        wed: e.target.tf_expenses_2.value || 0,
        thu: e.target.tf_expenses_3.value || 0,
        fri: e.target.tf_expenses_4.value || 0,
        sat: e.target.tf_expenses_5.value || 0,
        sun: e.target.tf_expenses_6.value || 0,
      }

      const data = {
        week_starting: dateRange.startOfWeek,
        week_ending: dateRange.endOfWeek,
        submitted_time: Date.now().toLocaleString(),
        status: 'pending', // means submitted by employee, pending for approval
        types: ['regular', 'expenses', 'over_time', 'double_time'],
        regular: {
          ...regular,
          total: regular.mon + regular.tue + regular.wed + regular.thu + regular.fri + regular.sat + regular.sun,
        },
        expenses: {
          ...expenses,
          total: expenses.mon + expenses.tue + expenses.wed + expenses.thu + expenses.fri + expenses.sat + expenses.sun,
        },
        double_time: {
          ...doubleTime,
          total: doubleTime.mon + doubleTime.tue + doubleTime.wed + doubleTime.thu + doubleTime.fri + doubleTime.sat + doubleTime.sun,
        },
        over_time: {
          ...overTime,
          total: overTime.mon + overTime.tue + overTime.wed + overTime.thu + overTime.fri + overTime.sat + overTime.sun,
        },
        additional_details: {
          details: e.target.additional_details_tf.value,
          attachment_url: 'asdf',
          attachment_name: e.target.attachment_box.title,
        },
      }

      return data
    } catch (err) {
      console.log(err)
      return 'err'
    }
  }

  const handleTimesheetSubmit = async (e) => {

    e.preventDefault()

    const payload = validateFormEntries(e)

    if (payload == 'err') {
      setToast({ type: 'error', message: 'Error submitting the timesheet!' })
      return
    }

    try {
      const res = await axiosp.post('/timesheet4/time-entries/', payload)
      if (res.status == 201) {
        setToast({ type: 'success', message: 'Timesheet Submitted Successfully!' })
      }
    } catch (err) {
      console.log(err)
      setToast({ type: 'error', message: 'Error submitting the timesheet!' })

    }


  }


  useEffect(() => {
    setTitleProps({ title: 'My Timesheet' })
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

        <FlexBox sx={{ padding: '0' }}>

          <DateCalendar
            showDaysOutsideCurrentMonth
            value={selectedDate} onChange={(val) => setSelectedDate(val)} />
        </FlexBox>


        <FlexBox gap='0.25rem'>

          <Typography variant='h6' >Holidays</Typography>
          <Typography variant='body1' >No Holidays This Month!</Typography>
        </FlexBox>

        <FlexBox gap='0.25rem'>

          <Typography variant='h6' >Clarifications</Typography>
          <Typography variant='body1' >No Clarification Requests!</Typography>
        </FlexBox>



      </Box>

      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>

        <FlexBox row sx={{ justifyContent: 'space-between', padding: '0.5rem' }}>


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

              Selected Week: <span style={{ fontWeight: '500' }}>{dateRange?.startOfWeek + ' to ' + dateRange?.endOfWeek}</span>
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



          {/* </Paper> */}
        </FlexBox>


        <TimeSheetTable handleTimesheetSubmit={handleTimesheetSubmit} source={'CANDIDATE'} dateRange={dateRange} />
      </Box>


    </Box>
  )
}

export default MyTimeSheet