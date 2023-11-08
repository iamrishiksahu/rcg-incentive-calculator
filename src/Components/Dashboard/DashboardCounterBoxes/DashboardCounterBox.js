import React from 'react'
import { Box, Typography } from '@mui/material'

const DashboardCounterBox = ({ title, count, gradient }) => {

    if(count < 10){
        count = '0' + count;
    }
  return (
    <Box sx={{
        width: '100%',
        height: '5.6rem',
        background: `linear-gradient(23deg, ${gradient})`,
        borderRadius: '1rem',
        padding: '0.5rem 1rem',
        height: '5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }}>

        <Typography variant='body1' >{title}</Typography>
        <Typography variant='h6'>{count}</Typography>


    </Box>
  )
}

export default DashboardCounterBox