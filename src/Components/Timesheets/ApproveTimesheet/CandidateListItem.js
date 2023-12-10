import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { Avatar } from 'antd'
import React from 'react'

const CandidateListItem = ({ data, handleClick, bgColor }) => {

  const getFirstCharFromName = () => {
    return data.name.substring(0,1)
  }

  const getRandomMutedColor = () => {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#1abc9c', '#9b59b6', '#34495e', '#e67e22', '#27ae60', '#d35400',];
    // Pick a random color from the array
    const idx = Math.floor(Math.random() * colors.length)
    const randomColor = colors[idx]

    return `${randomColor}80`;
  }



  const testImageUrl = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'

  return (
    <Box
      onClick={() => handleClick(data)}
      sx={{
        boxShadow: '0px 0 0.25rem #00000010',
        backgroundColor: 'var(--color-primary-light-2)',
        borderRadius: '1rem',
        padding: '1rem',
        margin: '1rem',
        cursor: 'pointer',
        transition: 'all 100ms ease',
        '&:hover': {
          backgroundColor: '#00000012'
        }

      }}>
      <Stack direction={'row'} spacing={'1rem'} alignItems={'center'}>
        <Box
          sx={{
            height: '36px',
            width: '36px',
            backgroundColor: `${bgColor}85`,
            backgroundImage: `url('${data.profile_image}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {!data.profile_image.includes('http')? getFirstCharFromName() : ''}
        </Box>
        <Box>
          <Typography>{data.name}</Typography>
          <Typography variant='body2'>{data.designation + ', ' + data.department}</Typography>
        </Box>
      </Stack>


    </Box>
  )
}

export default CandidateListItem