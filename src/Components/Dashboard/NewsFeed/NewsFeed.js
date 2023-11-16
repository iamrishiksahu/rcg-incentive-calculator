import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NewsFeedItem from './NewsFeedItem/NewsFeedItem'

const NewsFeed = () => {

    const [data, setData] = useState([
        {
            title: 'Welcome to notification',
            time: 'Wed - 11th Oct, 2023',
            sender: 'System',
        }, {
            title: 'Welcome to notification',
            time: 'Wed - 11th Oct, 2023',
            sender: 'System',
        }, {
            title: 'Welcome to notification',
            time: 'Wed - 11th Oct, 2023',
            sender: 'System',
        }, {
            title: 'Welcome to notification',
            time: 'Wed - 11th Oct, 2023',
            sender: 'System',
        }, {
            title: 'Welcome to notification',
            time: 'Wed - 11th Oct, 2023',
            sender: 'System',
        }, {
            title: 'Welcome to notification',
            time: 'Wed - 11th Oct, 2023',
            sender: 'System',
        }, {
            title: 'Welcome to notification',
            time: 'Wed - 11th Oct, 2023',
            sender: 'System',
        },

    ])
    return (
        <Box sx={{
            borderRadius: '1rem',
            background: 'var(--white)',
            padding: '1.5rem'
        }}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h6'>News Feed</Typography>
                <Link style={{color: '#1092DE'}}>See all</Link>
            </Box>

            <Box>
                {data.map((item, idx) => {
                    return(
                        <NewsFeedItem key={idx} title={item.title} date={item.time} sender={item.sender} />
                    )
                })}
            </Box>

        </Box>
    )
}

export default NewsFeed