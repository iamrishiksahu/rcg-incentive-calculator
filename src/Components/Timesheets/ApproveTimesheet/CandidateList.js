import { Box } from '@mui/material'
import React from 'react'
import CandidateListItem from './CandidateListItem'

const CandidateList = ({list, setList}) => {


  return (
    <Box sx={{
        backgroundColor: 'var(--white)',
        borderRadius: '1rem',
        overflowY: 'auto',
        "::-webkit-scrollbar": {
            display: 'none'
        }
    }}>

        {list.map((item, idx) => {

            return (
                <CandidateListItem key={idx} data={item} />
            )

        })}

                        

    </Box>
  )
}

export default CandidateList