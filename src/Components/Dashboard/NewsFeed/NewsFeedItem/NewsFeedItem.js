import { Box, Typography } from '@mui/material'
import React from 'react'

const NewsFeedItem = ({ title, sender, date }) => {


    return (
        <Box sx={{
            borderBottom: '1px solid #ebebeb',
            marginTop: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            '&:last-child': {
                borderBottom: 'none'
            }
        }}>

            <Typography variant='body1'>{title}</Typography>

            <Box sx={{
                marginBottom: '0.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                color: '#00000080',
            }}>

                <Typography variant='body2'>{sender}</Typography>
                <Typography variant='body2'>{date}</Typography>
            </Box>

        </Box>
    )
}

export default NewsFeedItem