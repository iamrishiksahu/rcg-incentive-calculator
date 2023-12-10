import React, { useEffect, useState } from 'react'
import usePageTitle from '../../../hooks/usePageTitle'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import dayjs from 'dayjs'
import { getWeekDateRange } from '../../../Utils/dateUtils'
import format from 'date-fns/format'
import TimeSheetTable from '../MyTimesheet/TimeSheetTable'

const SingleTimesheetApproval = () => {
    const { setTitleProps } = usePageTitle()
    const {candidate_id, week_ending} = useParams()

    console.log(week_ending)
    const today = dayjs(week_ending).format('YYYY-MM-DD')
    console.log(today)
    const [dateRange, setDateRange] = useState(getWeekDateRange(today, 'mon'))
  

    useEffect(() => {
        setTitleProps({ title: `${candidate_id}'s ${week_ending} Timesheet`, goBack: '/dashboard/approve-timesheet' })
    }, [])

    return (
        <Box sx={{
            margin: '2rem',
            marginTop: '0',
            padding: '2rem',
            boxShadow: 'var(--box-shadow-1)',
            borderRadius: '1rem',
            backgroundColor: 'var(--white)'
        }}>
            <TimeSheetTable source={'APPROVER'} dateRange={dateRange} />
        </Box>
    )
}

export default SingleTimesheetApproval