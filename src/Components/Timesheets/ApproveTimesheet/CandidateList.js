import { Box, Paper, TextField, Typography, InputAdornment } from '@mui/material'
import React from 'react'
import CandidateListItem from './CandidateListItem'
import IconContainer from '../../../CustomElements/Containers/IconContainer'

const CandidateList = ({ list, setList }) => {


    return (
        <Box sx={{

            overflowY: 'auto',
            "::-webkit-scrollbar": {
                display: 'none'
            },
            minWidth: 'max-content',
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

                            <IconContainer sx={{marginTop: '3px'}} size={'1rem'} icon={'search'} />

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
                    <CandidateListItem key={idx} data={item} />
                )

            })}



        </Box>
    )
}

export default CandidateList