import React from 'react'
import { H2, H3, PText, Small } from '../../CustomElements/Typography/Typgraphy'
import { Box, IconButton } from '@mui/material'
const DashboardTopBar = ({ title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '2rem',
        minHeight: '5rem',
      }}
    >
      <H3>{title}</H3>

      {/* Acount Actions Bar */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        
      }}>

        <IconButton sx={{
          
        }}>

          <img src='/images/side-nav/circle-1.svg' width='28px' alt='s'/>



        </IconButton>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>

        <Small>Good Morning</Small>
        <PText>Rishik Sahu</PText>

      </Box>

      <IconButton sx={{
          
        }}>

          <img src='/images/side-nav/circle-1.svg' width='28px' alt='s'/>



        </IconButton>


      </Box>
    </Box>
  )
}



export default DashboardTopBar