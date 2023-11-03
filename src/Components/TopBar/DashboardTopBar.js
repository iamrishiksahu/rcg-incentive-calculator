import React from 'react'
import { H2, H3 } from '../../CustomElements/Typography/Typgraphy'
import { Box } from '@mui/material'
const DashboardTopBar = ({ title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '2rem',
        minHeight: '5rem',
      }}
    >
      <H3>{title}</H3>

      {/* Acount Actions Bar */}
      <Box>


      </Box>
    </Box>
  )
}

export default DashboardTopBar