import React from 'react'
import { Box } from '@mui/system'

const Avatar = (props) => {
    const size = props.size? `${props.size}` : '36px'
    return (
        <Box
            sx={{
                height: size,
                width: size,
                backgroundColor: props.bgColor? `${props.bgColor}85` : 'var(--color-info-dark)',
                backgroundImage: `url('${props.src}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...props.sx
            }}
        >
            {!props.src.includes('http') ? props.src : ''}
        </Box>

    )
}

export default Avatar