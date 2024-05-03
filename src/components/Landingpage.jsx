import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <>
    <Box display="flex" alignItems="center" width="100%" height='93vh' justifyContent='center' flexDirection='column'>
      <h1 style={{height:'80px'}}>NoteWave</h1>
      <Link to={'/home'}>
          <Button color="primary" disabled={false}
      variant="contained">
        Get Started
        </Button>
      </Link>
      
    </Box>
    </>
  )
}

export default Landingpage