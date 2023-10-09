import { Container, Box, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import { Box50 } from '../../CustomElements/Containers/Box50'
import { H2, PText } from '../../CustomElements/Typography/Typgraphy'
import { Small } from '../../CustomElements/Typography/Typgraphy'
import { VGap } from '../../CustomElements/Gaps/Gap'

const list = [
    {
        message: 'Welcome to the team.',
        date: '27 Sept, 2023',
        sender: 'System'
    },
    {
        
        message: 'Lorem iri tempora officiis consectetur voluptate iure asperiores ad numquam earum.',
        date: '27 Sept, 2023',
        sender: 'System'
    },
    {
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, libero.',
        date: '27 Sept, 2023',
        sender: 'System'
    },
    {
        message: 'Loremng elit. Consequatur, libero.',
        date: '27 Sept, 2023',
        sender: 'System'
    },
    {
        message: 'Welcome to the team.',
        date: '27 Sept, 2023',
        sender: 'System'
    },
    {
        message: 'Welcome to the team.',
        date: '27 Sept, 2023',
        sender: 'System'
    },
    {
        message: 'Welcome to the team.',
        date: '27 Sept, 2023',
        sender: 'System'
    },
    {
        message: 'Welcome to the team.',
        date: '27 Sept, 2023',
        sender: 'System'
    },
    {
        message: 'Welcome to the team.',
        date: '27 Sept, 2023',
        sender: 'System'
    },
]


const actions = [
    {
        name: 'Approve Time Sheet',
        icon: 'alternate_email',
        endpoint: ''
    },
    {
        name: 'Add Candidate',
        icon: 'alternate_email',
        endpoint: ''
    },
    {
        name: 'Job Assignment',
        icon: 'alternate_email',
        endpoint: ''
    },
    {
        name: 'Invoice',
        icon: 'alternate_email',
        endpoint: ''
    },
    {
        name: 'Submit Time Sheet',
        icon: 'alternate_email',
        endpoint: ''
    },
    {
        name: 'Login to HRMS',
        icon: 'alternate_email',
        endpoint: ''
    },
]
const Window2 = () => {
    return (
        <Container
            sx={{
                backroundColor: 'var(--color-background)',
                minWidth: '100vw',
                padding: '2rem',
            }}

        >

            <Box sx={{
                display: 'flex',
                justifyContent:'space-between',
                alignItems: 'center'
            }}>

                <img width='200px' src='/images/rapid-consulting-logo.png' />
                <Box>

                    <h3>Welcome, Bhavya!</h3>
                    <PText>Tuesdat - 10 Oct, 2023</PText>
                </Box>

            </Box>





            <Box
                sx={{
                    display: 'flex',
                    gap: '4rem'

                }}
            >
                <Box
                    sx={{
                        padding: '1rem',
                        width: '40%',
                        justifyContent: 'start',
                        backroundColor: 'var(--color-light)',
                        boxShadow: 'var(--box-shadow)'

                    }}
                >
                    <H2>News Feed</H2>

                    {list.map((item, key) => {

                        return <Box
                            sx={{
                                boxShadow: 'var(--box-shadow)',
                                padding: '1rem',
                                backgroundColor: 'var(--color-white)',
                                marginTop: '1rem',

                            }}
                        >

                            <PText>{item.message}</PText>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>

                                <Small sx={{ color: 'var(--color-info-dark)' }}>{item.sender}</Small>
                                <Small sx={{ color: 'var(--color-info-dark)' }}>{item.date}</Small>

                            </Box>
                        </Box>

                    })}





                </Box>
                <Box
                    sx={{
                        padding: '1rem',
                        width: '50%',
                        height: '100%',
                        borderRadius: '1rem',
                        padding: '2rem',
                        justifyContent: 'start',
                        backroundColor: 'var(--color-light)',
                        boxShadow: 'var(--box-shadow)'

                    }}>
                    <H2>Actions</H2>
                    <VGap/>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {actions.map((item, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index}>
                                <Card
                                    sx={{
                                        minWidth: '10rem',
                                        minHeight: '10rem',
                                        padding: '1rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center'
                                    }}
                                >
                                    <h3>{item.name}</h3>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>


                </Box>

            </Box>

        </Container >
    )
}

export default Window2