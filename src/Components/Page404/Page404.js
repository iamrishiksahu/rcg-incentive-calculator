import React from 'react'
import { Typography, Stack } from '@mui/material'

const Page404 = () => {
  return (
    <Stack sx={{
      alignItems: 'center',
      height: '100vh',
      justifyContent: 'center'
    }}>

      <Typography sx={{
        fontSize: '10rem',
        fontWeight: 700,
        color: 'var(--color-primary)'
      }}>
        404!
      </Typography>

      <Typography variant='h1'>
        I think you landed a wrong page.
      </Typography>
    </Stack>
  )
}

export default Page404