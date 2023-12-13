import React, { useEffect, useState } from 'react'
import usePageTitle from '../../../hooks/usePageTitle'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import dayjs from 'dayjs'
import { getWeekDateRange, getWeekStartFromEnd } from '../../../Utils/dateUtils'
import format from 'date-fns/format'
import TimeSheetTable from '../MyTimesheet/TimeSheetTable'

const SingleTimesheetApproval = () => {
    const { setTitleProps } = usePageTitle()
    const {candidate_id, week_ending} = useParams()

    const startDate = getWeekStartFromEnd(week_ending)

    const dateRange = {
        startOfWeek: startDate,
        endOfWeek: week_ending
    }
    console.log(getWeekStartFromEnd(week_ending))

    useEffect(() => {
        setTitleProps({ title: `${candidate_id}'s ${week_ending} Timesheet`, goBack: '/dashboard/approve-timesheet' })
    }, [])

    return (
        <Box sx={{
            margin: '2rem',
            marginTop: '0',
            borderRadius: '1rem',
        }}>
            <TimeSheetTable source={'APPROVER'} dateRange={dateRange} />
        </Box>
    )
}

export default SingleTimesheetApproval