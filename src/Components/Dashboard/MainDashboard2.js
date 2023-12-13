import { CircularProgress, Tooltip, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect } from 'react'
import DashboardCard from './DashboardComponents/DashboardCard'
import { Progress } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { TextLink, TextTitle } from '../../CustomElements/Typography/Typgraphy'
import NewsFeed from './NewsFeed/NewsFeed'
import Avatar from '../../CustomElements/Avatar'
import usePageTitle from '../../hooks/usePageTitle'
import { Steps } from 'antd'

const MainDashboard2 = () => {
    const navigate = useNavigate()
    const { setTitleProps } = usePageTitle()

    const userData = {
        full_name: 'Rishik Sahu',
        role: 'Frontend UI Developer',
        work_location: 'Remote'
    }

    useEffect(() => {
        setTitleProps({ title: 'Employee Dashboard' })
    }, [])
    return (
        <Box sx={{
            margin: '2rem',
            marginTop: '0',
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: '10fr 3fr'
        }}>

            {/* LEFT COLUMN */}

            <Stack spacing={'1rem'}>

                {/* FIRST ROW */}

                <Stack spacing={'1rem'} direction={'row'}>
                    <DashboardCard row sx={{ width: '100%', position: 'relative' }}>
                        <Avatar src={'R'} size={'4rem'} />
                        <Stack spacing={'0.25rem'}>
                            <Typography variant='h5' >{userData.full_name}</Typography>
                            <Typography variant='body' >{userData.role + ' | ' + userData.work_location}</Typography>
                            <Typography color={'var(--color-text-3)'} sx={{
                                position: 'absolute',
                                right: '2rem',
                                bottom: '1rem',
                            }} >
                                <span style={{
                                    marginRight: '0.5rem',
                                    color: 'var(--color-success)'
                                }}>•</span>Today's login time: 09:23 AM
                            </Typography>

                        </Stack>

                    </DashboardCard>
                    <DashboardCard sx={{ width: '50%', height: 'max-content' }}>
                        <TextTitle>Reporting To</TextTitle>
                        <Stack direction={'row'} spacing={'1rem'} alignItems={'center'}>
                            <Avatar bgColor={''} src={'https://rapidtech.keka.com/files/4f689000-8639-4b64-9aa6-c95fb3b1b05e/50x50/profileimage/27e33446975f4aac809eb7aca3b703fb.jpg?1702396800000'} />
                            <Stack>
                                <Typography>Bhavya Boddeti</Typography>
                                <Typography variant='body2'>Branch Manager</Typography>
                            </Stack>
                        </Stack>
                    </DashboardCard>
                </Stack>

                {/* SECOND ROW */}
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: '4fr 4fr 1fr',
                    gap: '1rem'
                }}>

                    <DashboardCard row>
                        <Stack sx={{ gap: '0.5rem', padding: '0rem 1rem' }} >

                            <img height={24} width={24} style={{ mzarginBottom: '0.5rem' }} src='/images/dashboard/candidate/wall-clock.png' />
                            <Typography variant='body2'>Average Hours</Typography>
                            <Typography variant='h6' fontWeight={600}>7h 34m</Typography>
                        </Stack>
                        <Stack sx={{ gap: '0.5rem', padding: '0rem 1rem' }} >

                            <img height={24} width={24} style={{ marginBottom: '0.5rem' }} src='/images/dashboard/candidate/mountain.png' />
                            <Typography variant='body2'>On-Time Arrivals</Typography>
                            <Typography variant='h6' fontWeight={600}>97.88%</Typography>
                        </Stack>

                    </DashboardCard>

                    <DashboardCard row >

                        <Stack sx={{ gap: '0.5rem', padding: '0rem 1rem' }} >

                            <img height={24} width={24} style={{ marginBottom: '0.5rem' }} src='/images/dashboard/candidate/flag.png' />
                            <Typography variant='body2'>Average Check-in</Typography>
                            <Typography variant='h6' fontWeight={600}>09:25AM</Typography>
                        </Stack>
                        <Stack sx={{ gap: '0.5rem', padding: '0rem 1rem' }} >

                            <img height={24} width={24} style={{ marginBottom: '0.5rem' }} src='/images/dashboard/candidate/check-out.png' />
                            <Typography variant='body2'>Average Check-out</Typography>
                            <Typography variant='h6' fontWeight={600}>07:12PM</Typography>
                        </Stack>


                    </DashboardCard>

                    <DashboardCard>
                        <Stack sx={{ gap: '0.5rem', padding: '0rem 1rem' }} >

                            <Stack direction={'row'} spacing={'1rem'}>
                                <img height={24} width={24} style={{ marginBottom: '0.5rem' }} src='/images/dashboard/candidate/vacation.png' />
                                <Typography>Leaves</Typography>

                            </Stack>
                            <Stack direction={'row'} spacing={'1rem'}>
                                <Stack>
                                    <Typography variant='body2'>Casual</Typography>
                                    <Typography variant='h6' fontWeight={600}>3.25/7.88</Typography>
                                </Stack>
                                <Stack>
                                    <Typography variant='body2'>Emergency</Typography>
                                    <Typography variant='h6' fontWeight={600}>3.25/7.88</Typography>
                                </Stack>
                            </Stack>




                        </Stack>

                    </DashboardCard>


                </Box>

                {/* THIRD ROW */}
                <Typography variant='h6'>Basic Details</Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem'
                }}>
                    <DashboardCard sx={{
                        padding: '2rem',
                        paddingTop: '1.5rem'
                    }}>

                        <Typography variant='h6' fontWeight={400}>Educational Details</Typography>

                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '2rem',
                        }}>
                            <Stack>
                                <TextTitle>Specialization</TextTitle>
                                <Typography variant='body'>Mathematics & Computing</Typography>
                            </Stack>
                            <Stack>
                                <TextTitle>CGPA/Percentage</TextTitle>
                                <Typography variant='body'>8.62</Typography>
                            </Stack>
                            <Stack>
                                <TextTitle>University/College</TextTitle>
                                <Typography variant='body'>BIT Mesra, Ranchi</Typography>
                            </Stack>
                            <Stack>
                                <TextTitle>Degree</TextTitle>
                                <Typography variant='body'>I.M.Sc.</Typography>
                            </Stack>
                        </Box>

                    </DashboardCard>

                    <DashboardCard sx={{
                        padding: '2rem',
                        paddingTop: '1.5rem'
                    }}>
                        <Typography variant='h6' fontWeight={400}>Contact Details</Typography>

                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '2rem',
                        }}>
                            <Stack>
                                <TextTitle>Work Phone</TextTitle>
                                <Typography variant='body'>+91-9098989898</Typography>
                            </Stack>
                            <Stack>
                                <TextTitle>Personal Phone</TextTitle>
                                <Typography variant='body'>+91-8987400143</Typography>
                            </Stack>
                            <Stack>
                                <TextTitle>Work Email</TextTitle>
                                <a href='mailto:rishik.sahu@rapidtechservices.com'><Typography variant='body'>rishik.sahu</Typography></a>
                            </Stack>
                            <Stack>
                                <TextTitle>Personal Email</TextTitle>
                                <Typography variant='body'>iamrishiksahu@gmail.com</Typography>
                            </Stack>
                        </Box>

                    </DashboardCard>
                </Box>

                {/* FOURTH ROW */}
                <Typography variant='h6'>Professional Journey</Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '1rem'
                }}>
                    <DashboardCard sx={{
                        padding: '2rem',
                        paddingTop: '1.5rem'
                    }}>

                        <Steps
                            progressDot
                            current={100}
                            direction="vertical"
                            items={[
                                {
                                    title: 'Frontend UI Developer',
                                    subTitle: 'Rapid Techbologies (2 Months)',
                                    description: <>
                                        <Typography>– Working in the Front-End part for design, development, and deployment of Yukta Portal Project - an HRMS.</Typography>
                                        <Typography>– As the sole team member in Front-End, led the project from scratch, utilizing React.JS, Material-UI & Redux-Toolkit as the core technology.</Typography>
                                    </>,
                                },
                                {
                                    title: 'Web Developer',
                                    subTitle: 'Ghughar Media (6 Months)',
                                    description: <>
                                        <Typography>– Developed captivating and responsive landing pages for products and services strategically driving an increase of 20% in conversion rates.</Typography>
                                        <Typography>– Seamlessly integrated secure payment gateways on websites to facilitate online payments which catered over 20,000 digital delivery of products and services.</Typography>
                                    </>,
                                },
                                {
                                    title: 'Android Developer',
                                    subTitle: 'Jharkhand Warrior (8 Months)',
                                    description: <>
                                        <Typography>– Spearheaded the end-to-end development and deployment of the Jharkhand Warrior android app, leveraging Native Android Development within an agile development framework.</Typography>
                                        <Typography>– Integrated Firestore and Firebase Realtime Database to facilitate video lesson consumption and test taking environment where more than 1000 users watched lessons and took tests.</Typography>
                                        <Typography>– Integrated and managed video hosting platform Vimeo and created module to prohibit video piracy.</Typography>
                                    </>,
                                },
                            ]}
                        />


                    </DashboardCard>

                </Box>


            </Stack>


            {/* RIGHT COLUMN */}
            <Stack spacing={'1rem'} width={'100%'}>

                {/* FIRST ROW */}
                <Tooltip title={'Go to yout profile.'}>
                    <DashboardCard row
                        onClick={() => navigate('/dashboard/my-profile')}
                        sx={{
                            cursor: 'pointer',
                            '&:hover': {
                                transform: 'scale(1.02)'
                            }
                        }} >
                        <Progress size={40} type="circle" percent={75} style={{ display: 'flex', alignItems: 'center' }} />
                        <Stack>
                            <Typography variant='h6'>Profile Completion</Typography>
                            <Typography variant='body2'>Click to complete your profile!</Typography>
                        </Stack>

                    </DashboardCard>
                </Tooltip>

                <NewsFeed />






            </Stack>

        </Box>
    )
}

export default MainDashboard2