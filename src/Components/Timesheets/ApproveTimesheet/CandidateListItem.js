import { Box, Typography } from '@mui/material'
import React from 'react'

const CandidateListItem = ({data}) => {
  return (
    <Box sx={{

        // borderBottom: '1px solid #00000020',
        boxShadow: '0px 0 0.25rem #00000010',
        backgroundColor: 'var(--color-main-bg)',
        borderRadius: '1rem',
        padding: '1rem',
        margin: '1rem',
        cursor: 'pointer',
        transition: 'all 100ms ease',
        '&:hover': {
          backgroundColor: '#00000012'
        }

    }}>

        <Typography>{data.name}</Typography>
        <Typography variant='body2'>{data.designation}</Typography>
        <Typography variant='body2'>{data.department}</Typography>

    </Box>
  )
}

export default CandidateListItem