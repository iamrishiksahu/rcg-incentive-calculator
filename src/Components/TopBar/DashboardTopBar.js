import React from 'react'
import { H2, H3, PText, Small } from '../../CustomElements/Typography/Typgraphy'
import { Box, IconButton } from '@mui/material'
import { getHours } from 'date-fns'
const DashboardTopBar = ({ title }) => {



  const getTitle = () => {
    const url = window.location.href
    if (url.endsWith('dashboard')) {
      return 'Dashboard'
    } else if (url.endsWith('add-assignment')) {
      return 'Add Assignment'
    } else if (url.endsWith('add-candidate')) {
      return 'Add Candidate'
    } else if (url.endsWith('assignments')) {
      return 'Assignment Dashboard'
    } else if (url.endsWith('add-assignment')) {
      return 'Add Assignment'
    } else if (url.endsWith('my-timesheet')) {
      return 'My Timesheet'
    } else if (url.endsWith('add-assignment')) {
      return 'Add Assignment'
    }
    else {
      return ''
    }
  }


  const getGreetingText = () => {
    let hrs = new Date()
    hrs = hrs.getHours()
    if (hrs >= 0 && hrs < 12) {
      return 'Good Morning'
    } else if (hrs >= 12 && hrs < 18) {
      return 'Good Afternoon'
    } else if (hrs >= 18) {
      return 'Good Evening'
    } else {
      return ''
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '2rem',
        justifyContent: 'space-between',
        marginRight: '1.5rem',
        minHeight: '5rem',
      }}
    >
      <H3>{getTitle()}</H3>

      {/* Acount Actions Bar */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        width: '20rem',
        justifyContent: 'space-between'

      }}>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>

          <IconButton sx={{ background: 'white', boxShadow: 'var(--box-shadow)' }}>

            <img src='/images/top-bar/user.png' width='17.5px' alt='s' />

          </IconButton>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>

            <Small>{getGreetingText()}</Small>
            <PText>Rishik Sahu</PText>

          </Box>

        </Box>



        <IconButton sx={{ background: 'white', boxShadow: 'var(--box-shadow)' }}>


          <img src='/images/top-bar/notification.svg' alt='s' />



        </IconButton>


      </Box>
    </Box>
  )
}



export default DashboardTopBar