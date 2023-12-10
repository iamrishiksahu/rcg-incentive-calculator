import { Box, Paper, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import usePageTitle from '../../../hooks/usePageTitle'
import CandidateList from './CandidateList'
import ApproveDashboard from './ApproveDashboard'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import IconContainer from '../../../CustomElements/Containers/IconContainer'

const ApproveTimesheet = () => {

    const { setTitleProps } = usePageTitle()

    const [candidateList, setCandidateList] = useState([
        {
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        }, {
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        }, {
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        }, {
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        }, {
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        }, {
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        }, {
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        }, {
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        }, {
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        }, {
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        }, {
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        }, {
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        }, {
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        },
    ])

    useEffect(() => {
        setTitleProps({ title: 'Approve Timesheet' })
    }, [])
    return (

        <>


            <Stack spacing={'1rem'} sx={{
                padding: '2rem',
                paddingTop: '0rem'
            }}>
                <Box sx={{
                    // background: 'var(--white)',
                    borderRadius: '1rem',
                    boxShadow: '0 0 1rem #0000007'
                }}>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4,1fr)',
                        gap: '1rem',

                    }}>


                        <NumericStatBox >
                            <Typography variant='body2'>Total</Typography>
                            <Typography variant='h6'>64</Typography>
                            <IconContainer
                                absolute
                                icon='numbers'
                                r='1rem'
                                b='1rem'
                                color={'var(--color-danger)'}
                                size={'2rem'}
                            />
                        </NumericStatBox>
                        <NumericStatBox >
                            <Typography variant='body2'>Pending</Typography>
                            <Typography variant='h6'>64</Typography>
                            <IconContainer
                                absolute
                                icon='schedule'
                                r='1rem'
                                b='1rem'
                                color={'var(--color-warning)'}
                                size={'2rem'}
                            />
                        </NumericStatBox>
                        <NumericStatBox  >
                            <Typography variant='body2'>Approved</Typography>
                            <Typography variant='h6'>64</Typography>
                            <IconContainer
                                absolute
                                icon='check_circle'
                                r='1rem'
                                b='1rem'
                                color={'var(--color-success)'}
                                size={'2rem'}
                            />
                        </NumericStatBox>
                        <NumericStatBox >
                            <Typography variant='body2'>Clarification Pending</Typography>
                            <Typography variant='h6'>64</Typography>
                            <IconContainer
                                absolute
                                icon='emergency_home'
                                r='1rem'
                                b='1rem'
                                color={'var(--blue-2)'}
                                size={'2rem'}
                            />
                        </NumericStatBox>


                    </Box>

                </Box>
                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: '1.25fr 4fr',
                    backgroundColor: 'var(--white)',
                    gap: '1rem',
                    borderRadius: '1rem',
                    height: 'calc(100vh - 13.5rem)',
                    paddingBottom: '1rem',
                }}>
                    <CandidateList list={candidateList} />

                    <ApproveDashboard />

                </Box>


            </Stack>
        </>

    )
}

const NumericStatBox = styled(Stack)({
    boxShadow: '2px 2px 0.25rem #00000008',
    borderRadius: '1rem',
    backgroundColor: 'var(--white)',
    padding: '1rem 2rem',
    position: 'relative'

})

export default ApproveTimesheet