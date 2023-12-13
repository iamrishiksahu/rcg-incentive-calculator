import React, { useContext, useEffect, useState } from 'react'
import { H2, H3, PText, Small } from '../../CustomElements/Typography/Typgraphy'
import { Box, IconButton, Stack, MenuItem, Avatar, ListItem, Menu, Divider, Tooltip } from '@mui/material'
import { getHours } from 'date-fns'
import PageTitleContext from '../../context/PageTitleProvider'
import usePageTitle from '../../hooks/usePageTitle'
import { useNavigate } from 'react-router-dom'
import { Typography } from 'antd'
const DashboardTopBar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

        {titleProps.goBack ? <IconButton onClick={() => navigate(titleProps.goBack)}>
          <span className="material-symbols-outlined">
            arrow_back_ios
          </span>
        </IconButton> : <></>}

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

          <Tooltip title={'Account Options'}>
            <IconButton onClick={handleClick} sx={{ background: 'white', boxShadow: 'var(--box-shadow)' }}>

              <img src='/images/top-bar/user.png' width='17.5px' alt='s' />

            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >

            <MenuItem onClick={() => navigate('/dashboard/my-profile')}>
              <Typography>My Profile</Typography>
            </MenuItem>
            <MenuItem onClick={() => navigate('sign-out')}>
              <Typography>Logout</Typography>

            </MenuItem>

          </Menu>

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