import { Box, Paper, TextField, Typography, InputAdornment, Skeleton, Stack, CircularProgress } from '@mui/material'
import React from 'react'
import CandidateListItem from './CandidateListItem'
import IconContainer from '../../../CustomElements/Containers/IconContainer'
import axiosp from '../../../Utils/axiosConfig'
import useToast from '../../../customHooks/useToast'

const CandidateList = ({ list, setList, setCandidate, loadAllCandidates }) => {

    let idx = 0
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#1abc9c', '#9b59b6', '#34495e', '#e67e22', '#27ae60', '#d35400']
    const getIdx = () => {
        idx = idx + 1
        if (idx == colors.length) idx = 0
        return idx
    }

    const { setToast } = useToast()

    const handleCandidateClick = (data) => {
        setCandidate(data)
    }

    const handleCandidateSearch = async (e) => {
        e.preventDefault()

        const searchString = e.target.search.value

        if (searchString == '') {
            // The query is an empty string, we want to show all candidates
            await loadAllCandidates()
            return
        }

        try {
            console.log('sadf')
            const res = await axiosp.get(`search_contact_by_sequence/?sequence=${searchString}`)
            console.log(res.data)
            const data = res.data.map((item) => {
                return { ...item, name: item.first_name + ' ' + item.last_name }
            })
            setList(data)

        } catch (err) {
            console.log(err)
            setToast({ type: 'error', message: 'Unable to search candidates!' })
        }
    }





    return (
        <Box sx={{

            overflowY: 'auto',
            "::-webkit-scrollbar": {
                display: 'none'
            },
            minWidth: 'max-content',
            height: 'calc(100vh - 13.5rem)',

            // backgroundColor: 'var(--white)',
            // display: 'flex',
            // boxShadow: '0 0 1rem #00000010',,
            // borderRadius: '1rem',
            // borderRight: '2px solid var(--color-info-light)',
            paddingLeft: '1rem',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <form onSubmit={handleCandidateSearch}>
                <TextField
                    name='search'
                    variant='outlined'
                    size='small'
                    placeholder='Search candidate'
                    fullWidth
                    InputProps={{

                        startAdornment: (
                            <InputAdornment position="start">

                                <IconContainer sx={{ marginTop: '3px' }} size={'1rem'} icon={'search'} />

                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        position: 'sticky',
                        top: '0px',
                        background: 'var(--color-white)',
                        padding: '2rem 1rem 0.5rem  1rem',
                        // borderBottom: '2px solid var(--color-info-light)',
                    }}

                />
            </form>

            {list ? <>



                {list.map((item, idx) => {

                    return (
                        <CandidateListItem key={idx} data={item} handleClick={handleCandidateClick} bgColor={colors[getIdx()]} />
                    )

                })}
            </>


                : <Box className='sdf' sx={{
                    width: '100%',
                    height: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>

                    <CircularProgress />


                </Box>}


        </Box>
    )
}

export default CandidateList