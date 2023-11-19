import { Box, Typography } from '@mui/material'
import React from 'react'

const CandidateListItem = ({data}) => {
  return (
    <Box sx={{

        borderBottom: '1px solid #00000020',
        padding: '1rem'

    }}>

        <Typography>{data.name}</Typography>
        <Typography variant='body2'>{data.designation}</Typography>
        <Typography variant='body2'>{data.department}</Typography>

    </Box>
  )
}

export default CandidateListItem