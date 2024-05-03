import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CardComponent from './CardComponent';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
    const handleNavigate={

    }
    const style1 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <>
            <div style={{ width: '100%' }}>
                <Header />
                <Box display='flex'>
                    <Button onClick={handleOpen} variant='outlined' startIcon={<AddIcon />} style={{ width: '200px', margin: 'auto' }}>Add Document</Button>

                </Box>
                <Modal 
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box style={{borderRadius:'10px'}} sx={style1} display='flex'>
                    <TextField style={{width:'90%'}} id="outlined-basic" label="Document Name" variant="outlined" />
                    <Button variant='contained' ><DoneOutlinedIcon/></Button>
                    </Box>
                </Modal>
            </div>
            <div className="card">
                <CardComponent />
            </div>                

        </>
    )
}

export default Home