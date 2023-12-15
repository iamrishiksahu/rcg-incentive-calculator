import { Box } from '@mui/material'
import React from 'react'

const PageContainer = (props) => {
  return (
    <Box sx={{
        margin: '2rem',
        marginTop: '0rem',
        ...props.sx
    }}>
        {props.children}
    </Box>
  )
}

export default PageContainer