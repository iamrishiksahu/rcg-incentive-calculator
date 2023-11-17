import { Box } from '@mui/material'
import React from 'react'
import TimeSheetTable from './TimeSheetTable'

const MyTimeSheet = () => {
  return (
    <Box sx={{
      padding: '2rem'
    }}>

      <TimeSheetTable />

    </Box>
  )
}

export default MyTimeSheet