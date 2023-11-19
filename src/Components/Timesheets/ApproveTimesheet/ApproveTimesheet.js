import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import usePageTitle from '../../../hooks/usePageTitle'
import CandidateList from './CandidateList'
import ApproveDashboard from './ApproveDashboard'

const ApproveTimesheet = () => {

    const {setTitle} = usePageTitle()
    
    const[candidateList, setCandidateList] = useState([
        {
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        },{
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        },{
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        },{
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        },{
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        },{
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        },{
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        },{
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        },{
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        },{
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        },{
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        },{
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        },{
            name: 'Rishik Sahu',
            profile_image: 'asdf',
            designation: 'Web Developer',
            department: 'IT'
        },
    ])

    useEffect(() => {
        setTitle('Approve Timesheet')
    }, [])
  return (

    <Box sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        padding: '2rem',
        gap: '1rem',
        height: '90vh'
    }}>

        <CandidateList list={candidateList} />
        <ApproveDashboard/>

    </Box>
  )
}

export default ApproveTimesheet