import { Box, Paper, TextField, Typography, InputAdornment } from '@mui/material'
import React from 'react'
import CandidateListItem from './CandidateListItem'
import IconContainer from '../../../CustomElements/Containers/IconContainer'

const CandidateList = ({ list, setList, setCandidate }) => {

    let idx = 0
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#1abc9c', '#9b59b6', '#34495e', '#e67e22', '#27ae60', '#d35400']
    const getIdx = () => {
        idx = idx + 1
        if (idx == colors.length) idx = 0
        return idx
    }

    const handleCandidateClick = (data) => {
        setCandidate(data)
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


            <TextField
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

            {list.map((item, idx) => {

                return (
                    <CandidateListItem key={idx} data={item} handleClick={handleCandidateClick} bgColor={colors[getIdx()]} />
                )

            })}



        </Box>
    )
}

export default CandidateList