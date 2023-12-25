import { Box, Paper, Skeleton, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import usePageTitle from '../../../hooks/usePageTitle'
import CandidateList from './CandidateList'
import ApproveDashboard from './ApproveDashboard'
import { Typography } from '@mui/material'
import styled from 'styled-components'
import IconContainer from '../../../CustomElements/Containers/IconContainer'
import axiosp from '../../../Utils/axiosConfig'

const DummyList = [
    {
        name: 'Rishik Sahu',
        profile_image: 'asdf',
        designation: 'Frontend Developer',
        department: 'IT'
    }, {
        name: 'Suma Chapa',
        profile_image: 'asdf',
        designation: 'Backend Developer',
        department: 'IT'
    }, {
        name: 'Jayamurali Krishna',
        profile_image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
        designation: 'Team Lead',
        department: 'IT'
    }, {
        name: 'Haritha Tangudu',
        profile_image: 'asdf',
        designation: 'Test Strategists',
        department: 'IT'
    }, {
        name: 'Avinash Mukundan',
        profile_image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
        designation: 'CEO',
        department: 'IT'
    }, {
        name: 'Bhavya Boddeti',
        profile_image: 'asdf',
        designation: 'Manager',
        department: 'IT'
    }, {
        name: 'Bhupati Venkata Krishna Kumar',
        profile_image: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
        designation: 'Test Strategists',
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
]
const ApproveTimesheet = () => {

    const { setTitleProps } = usePageTitle()

    const [candidateList, setCandidateList] = useState(null)
    const [selectedCandidate, setSelectedCandidate] = useState(null)
    // const [selectedCandidate, setSelectedCandidate] = useState()

    const loadAllCandidates = async () => {
        try {
            const res = await axiosp.get('/candidate_details')
            const data = res.data.map((item) => {
                return { ...item, name: item.first_name + ' ' + item.last_name }
            })
            setCandidateList(data)
        } catch (err) {
            console.log(err)
        } finally {
        }
    }


    useEffect(() => {
        loadAllCandidates()
        setTitleProps({ title: 'Approve Timesheet' })
    }, [])
    return (

        <>


            <Stack spacing={'1rem'} sx={{
                padding: '2rem',
                paddingTop: '0rem'
            }}>
                <Box sx={{
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
                    paddingBottom: '1rem',
                }}>
                    <CandidateList candidate={selectedCandidate} setCandidate={setSelectedCandidate} list={candidateList} loadAllCandidates={loadAllCandidates} setList={setCandidateList} />


                    <ApproveDashboard candidate={selectedCandidate} setCandidate={setSelectedCandidate} />

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