import React from 'react'
import { Box } from '@mui/system'

const Avatar = (props) => {
    const size = props.size ? `${props.size}` : '36px'
    const fontSize = size.includes('px') ? size.substring(0, size.length - 2) * 0.6 + 'px'
        : size.includes('rem') ? size.substring(0, size.length - 3) * 0.6 + 'rem'
            : '1rem'

    console.log(fontSize)
    return (
        <Box
            sx={{
                height: size,
                width: size,
                backgroundColor: props.bgColor ? `${props.bgColor}85` : 'var(--color-primary-light)',
                backgroundImage: `url('${props.src}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: fontSize,
                fontWeight: 200,
                color: 'var(--color-text-1)',
                ...props.sx
            }}
        >
            {!props.src.includes('http') ? props.src : ''}
        </Box>

    )
}

export default Avatar