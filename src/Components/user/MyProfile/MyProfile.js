import React, { useEffect, useState } from 'react'
import PageContainer from '../../../CustomElements/Containers/PageContainer'
import usePageTitle from '../../../hooks/usePageTitle'
import { Box, Button, Paper, Stack, Tooltip, Typography } from '@mui/material'
import FlexBox from '../../../CustomElements/Containers/FlexBox'
import { Steps } from 'antd'
import axiosp from '../../../Utils/axiosConfig'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import UploadDocuments from './UploadDocuments'

const MyProfile = () => {

    const { setTitleProps } = usePageTitle()

    const navigate = useNavigate()

    const [profileData, setProfileData] = useState(null)
    const loadMyProfileData = async () => {
        try {
            const res = await axiosp.get('/dashboard/welcome_profile/')
            console.log(res.data)
            setProfileData(res.data)

        } catch (err) {
            console.log(err)
        }
    }

    const sampleResponseBody = {
        "total_completion": 0
        // backend work is required
    }



    useEffect(() => {
        setTitleProps({ title: 'My Profile' })
    }, [])
    return (
        <PageContainer>

            <Stack spacing={'2rem'}>
                <FlexBox sx={{ position: 'relative' }} >
                    <Stack direction={'row'} spacing={'2rem'}>
                        <img width={120} height={120} src='https://rapidtech.keka.com/files/4f689000-8639-4b64-9aa6-c95fb3b1b05e/200x200/profileimage/9fcd7b8346574b3db345e79569a4f2d8.jpg?1702742400000?1702742400000' alt='profile image' style={{
                            borderRadius: '8%'
                        }} />
                        <Stack justifyContent={'space-evenly'} flex={1}>
                            <Stack direction={'row'} spacing={'1rem'} alignItems={'center'} >
                                <Typography variant='h3' sx={{
                                    width: 'max-content'
                                }}>Rishik Sahu</Typography>

                                <Tooltip title='Click to copy!' arrow>
                                    <Typography variant='body2'
                                        onClick={(e) => {
                                            console.log(e.currentTarget.textContent)
                                            navigator.clipboard.writeText(e.currentTarget.textContent)
                                        }}
                                        sx={{
                                            backgroundColor: 'var(--color-primary-light)',
                                            padding: '.25rem 1rem',
                                            borderRadius: '1rem',
                                            color: 'var(--color-text-1)',
                                            cursor: 'pointer',
                                        }}>+91-8987400143</Typography>
                                </Tooltip>
                            </Stack>
                            <Stack direction={'row'} spacing={'2rem'} >
                                <DetailItem title='Job Title' value='Front End UI Developer' variant={'body2'} />
                                <DetailItem title='Department' value='Information Technology' variant={'body2'} />
                                <DetailItem title='Business Unit' value='Rapid Technologies' variant={'body2'} />
                                <DetailItem title='Reporting Manager' value='Bhavya Boddeti' variant={'body2'} />
                                <DetailItem title='EMP No' value='101' />
                            </Stack>
                        </Stack>

                    </Stack>

                    <Box sx={{
                        marginTop: '.5rem',
                        marginRight: '1rem',
                        position: 'absolute',
                        top: '0',
                        right: '0'
                    }}>

                        <Button onClick={() => navigate('upload-documents')} sx={{ textTransform: 'none' }}>Upload Documents</Button>
                    </Box>
                </FlexBox>

                <Routes>

                    <Route path='/' element={<ProfileDetails
                        titleItem={TitleItem}
                        identityItem={IdentityItem}
                        detailItem={DetailItem}
                    />} />

                    <Route path='/upload-documents' element={<UploadDocuments />} />

                </Routes>



            </Stack >
        </PageContainer >

    )
}

const IdentityItem = (props) => (
    <Paper sx={{
        padding: '1.5rem',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    }} >
        {props.children}
    </Paper>
)

const TitleItem = (props) => (
    <Stack direction={'row'} justifyContent={'space-between'} sx={{
        borderBottom: '1px solid var(--color-info-light)',
        paddingBottom: '.75rem'
    }}>
        <Typography variant='h4' sx={{ color: 'var(--color-text-2)' }}>{props.title}</Typography>
        <Typography variant='link2' onClick={() => alert(`${props.title} clicked`)}>Edit</Typography>
    </Stack>
)

const DetailItem = (props) => (
    <Stack flex={1}>
        <Typography variant='body2' sx={{
            textTransform: 'capitalize',
            color: 'var(--color-text-3)'
        }}>
            {props.title}
        </Typography>
        <Typography variant={props.variant || 'body'}>{props.value}</Typography>
    </Stack>
)

export default MyProfile