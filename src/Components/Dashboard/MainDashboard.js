import React, { useEffect, useState } from 'react'
import { Box, Button, Autocomplete, TextField } from '@mui/material'
import DashboardFinanceCard from './DashboardFinanceCards/DashboardFinanceCard'
import DashboardCounterBox from './DashboardCounterBoxes/DashboardCounterBox'
import { DummyCandidateList } from '../../Utils/constants'
import { useNavigate } from 'react-router-dom'
import axiosp from '../../Utils/axiosConfig'
import NewsFeed from './NewsFeed/NewsFeed'


const MainDashboard = () => {

    const navigate = useNavigate()

    const [candidateList, setCandidateList] = useState([])

    const loadCandidates = async () => {
        try {
            const res = await axiosp.get('/candidate_details')
            console.log(res.data)
            setCandidateList(res.data)
        } catch (err) {
            console.log(err)
        } finally {
            // setIsLoading(false)
        }
    }

    useEffect(() => {
        loadCandidates()
    }, [])

    return (
        <Box sx={{
            display: 'grid',
            gap: '4rem',
            gridTemplateColumns: '7fr 3fr',
            width: '100%',
            padding: '2rem',
        }}>

            <Box sx={{
                display: 'grid',
                gap: '2rem',
                gridTemplateColumns: '1fr 1fr'
            }}>

                <DashboardFinanceCard title1={'Total'} title2={'Incentices'} amount={'7,43,665.00'} />
                <DashboardFinanceCard title1={'Total'} title2={'Income'} amount={'25,73,694.00'} />


                <DashboardCounterBox
                    title={'Divisions'}
                    count={4}
                    gradient={'#FF7979 -231.96%, rgba(255, 255, 255, 0.50) 111.72%'} />
                <DashboardCounterBox
                    title={'Departments'}
                    count={5}
                    gradient={'#8C79FF -179.52%, rgba(255, 255, 255, 0.00) 88.1%'} />
                <DashboardCounterBox
                    title={'Employees'}
                    count={144}
                    gradient={'#FFD979 -141.93%, rgba(255, 255, 255, 0.50) 81.35%'} />
                <DashboardCounterBox
                    title={'Employees'}
                    count={144}
                    gradient={' #79FFDF -141.93%, rgba(255, 255, 255, 0.50) 81.35%'} />
                <DashboardCounterBox
                    title={'Divisions'}
                    count={15}
                    gradient={'#9CFF79 -231.96%, rgba(255, 255, 255, 0.50) 111.72%'} />
                <DashboardCounterBox
                    title={'Departments'}
                    count={5}
                    gradient={'#79F7FF -179.52%, rgba(255, 255, 255, 0.00) 88.1%'} />
                <DashboardCounterBox
                    title={'Employees'}
                    count={144}
                    gradient={'#79DFFF -141.93%, rgba(255, 255, 255, 0.50) 81.35%'} />
                <DashboardCounterBox
                    title={'Employees'}
                    count={144}
                    gradient={'#799FFF -141.93%, rgba(255, 255, 255, 0.50) 81.35%'} />

                {/* <Box sx={{
                    gridColumn: 'span 2',
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '2rem',
                    backgroundColor: 'white',
                    padding: '1rem',
                    borderRadius: '1rem',
                    // boxShadow: '0 0 20px 1px #00000010'
                }}>

                    <Autocomplete
                        disablePortal
                        fullWidth
                        options={DummyCandidateList}
                        renderInput={(params) => <TextField {...params} ariant='outlined' size='small' label="Select Candidate" />}
                    />

                    <Button
                        variant='outlined'
                        sx={{
                            width: '95%'
                        }}
                        onClick={() => navigate('/dashboard/add-candidate')}
                    >
                        Add New Candidate
                    </Button> */}


                {/* <DashboardAction icon={'/images/side-nav/add-candidate.png'} title={'Add Candidate'} />
                    <DashboardAction icon={'/images/side-nav/approve-timesheet.png'} title={'Approve Timesheet'} />
                    <DashboardAction icon={'/images/side-nav/add-assignment.png'} title={'Add Assignment'} />
                    <DashboardAction icon={'/images/side-nav/generate-invoice.png'} title={'Generate Invoice'} />
                    <DashboardAction icon={'/images/side-nav/add-assignment.png'} title={'Add Assignment'} />
                    <DashboardAction icon={'/images/side-nav/submit-timesheet.png'} title={'Submit Timesheet'} />*/}

                {/* </Box> */}


            </Box>

            <NewsFeed />

        </Box>
    )
}

export default MainDashboard