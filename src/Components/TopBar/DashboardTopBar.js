import React, { useContext, useEffect, useState } from 'react'
import { H2, H3, PText, Small } from '../../CustomElements/Typography/Typgraphy'
import { Box, IconButton, Stack } from '@mui/material'
import { getHours } from 'date-fns'
import PageTitleContext from '../../context/PageTitleProvider'
import usePageTitle from '../../hooks/usePageTitle'
import { useNavigate } from 'react-router-dom'
const DashboardTopBar = () => {


  const { titleProps } = usePageTitle()
  const navigate = useNavigate()

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

  useEffect(() => {
    // setTitle(getTitle())
  }, [titleProps])

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
      <Stack direction={'row'} alignItems={'center'}>

        {titleProps.goBack? <IconButton onClick={() => navigate(titleProps.goBack)}>
          <span class="material-symbols-outlined">
            arrow_back_ios
          </span>
        </IconButton> : <></> }
       
        <H3 sx={{ fontWeight: '500' }}>{titleProps.title}</H3>
      </Stack>

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