import React from 'react'
import { Box } from '@mui/material'

const FlexBox = (props) => {
    return (
        <Box {...props} sx={{
            display: 'flex',
            gap: props.gap || '1rem',
            alignItems: props.row ? 'center' : '',
            justifyContent: props.row ? '' : 'center',
            flexDirection: props.row ? 'row' : 'column',
            backgroundColor: 'var(--white)',
            padding: '1.25rem',
            borderRadius: '1rem',
            boxShadow: 'var(--box-shadow-1)',
            transition: 'all .1s ease-in-out',
            ...props.sx,
        }}
        >
            {props.children}
        </Box>
    )
}

export default FlexBox