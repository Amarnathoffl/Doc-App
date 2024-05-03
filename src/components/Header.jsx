import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className="headerbody">
        <Box display='flex' justifyContent='center' flexDirection='column' width='100%'>
        <Link className='link' to={'/'}><h1 style={{textAlign:'center',color:'black'}}>NoteWave</h1></Link>
        
        </Box>
    </div>
    
    </>
  )
}

export default Header