import React from 'react'
import { Card, Typography } from '@mui/material'

const DashboardAction = ({ title, icon }) => {
  return (
    <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '1.5rem',
        width: '7.75rem',
        alignItems: 'center',
        gap: '1rem',
        borderRadius: '1rem'
    }}>

        <img src={icon} width={'32px'} alt={`${icon}_icon`} />

        <Typography align='center' variant='body1' fontWeight={'500'}>{title}</Typography>


    </Card>
  )
}

export default DashboardAction