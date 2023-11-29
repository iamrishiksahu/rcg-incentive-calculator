import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axiosp from '../../Utils/axiosConfig'
import { useNavigate } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'

const AssignmentDashboard = () => {

  const {setTitle} = usePageTitle()
  const [isLoading, setIsLoading] = useState(false)

  const [candidateList, setCandidateList] = useState([])

  const navigate = useNavigate()

  const handleSearch = async (e) => {
    e.preventDefault()

    setIsLoading(true)
    try {

      const searchTxt = e.target.search_field.value;
      const res = await axiosp.get(`/search_contact_by_sequence/?sequence=${searchTxt}`)

      alert(searchTxt)
      console.log(res.data)
      setCandidateList(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }



  const loadCandidates = async () => {
    try {
      const res = await axiosp.get('/candidate_details')
      console.log(res.data)
      setCandidateList(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadCandidates()
    setTitle('Assignment Dashboard')

  }, [])


  return (
    <Box sx={{
      padding: '2rem'
    }}>

      <form
        onSubmit={handleSearch}
        style={{
          marginBottom: '2rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center'
        }}>

        <TextField
          variant="outlined"
          size="small"
          placeholder="Search Candiate..."
          name='search_field'
          sx={{
            width: '24%',
            "& fieldset": { border: 'none' },
            borderRadius: "2rem",
            backgroundColor: "white",
            boxShadow: '0 0 1rem 0.25rem rgba(0,0,0,0.03)'
          }}
          onKeyDown={(key) => {
            if (key.code == "Enter") {
              //add to the list
              // handleEnter({ action: 1 });
            }
          }} />

        <Button type='submit' sx={{ borderRadius: '1.5rem' }} variant='outlined'>
          Search

        </Button>



      </form>

      <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>

        {isLoading
          ? <CircularProgress />
          : candidateList?.map((item, idx) => {
            return (
              <Box
                onClick={() => navigate(`/dashboard/add-assignment/${item.id}`)}
                sx={{
                  "&:hover": {
                    transform: 'scale(1.02)'
                  },
                  cursor: 'pointer',
                  borderRadius: '1rem',
                  backgroundColor: 'var(--white)',
                  padding: '1.5rem',
                  boxSizing: 'border-box',
                  width: '24%',
                  minWidth: 'max-content',
                  transition: 'all 200ms ease'

                }}>

                <Typography fontWeight={500} variant='body1'>{item.name}</Typography>
                <Typography variant='body2'>{item.designation}</Typography>
                <Typography fontWeight={200} variant='body2'>{item.division}</Typography>


              </Box>

            )
          })}

      </Box>


    </Box>
  )
}

export default AssignmentDashboard