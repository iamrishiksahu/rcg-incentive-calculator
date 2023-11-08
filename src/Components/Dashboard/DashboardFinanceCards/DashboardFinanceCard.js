import React from 'react'
import { Box, Typography } from '@mui/material'

const DashboardFinanceCard = ({ title1, title2, amount }) => {
  return (
    <Box sx={{
        padding: '2rem',
        background: 'radial-gradient(92.7% 63.94% at 53.67% 53.12%, #B50101 0%, #3C0A03 100%)',
        borderRadius: '1rem',
        height: '10rem',
        color: 'var(--white)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }}>
        <Typography conte align='right' variant='h6'>{title1}</Typography>
        <Typography conte align='right' variant='h6'>{title2}</Typography>
        <Typography align='left' variant='h5'>₹{amount}</Typography>


    </Box>
  )
}

export default DashboardFinanceCard