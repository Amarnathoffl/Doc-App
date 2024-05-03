import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'react-router-dom';

function CardComponent({ documentTitle }) {
    
  return (
      <>
          <div style={{ height: '70vh' }}>
              <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          {documentTitle}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                          note
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <Box display='flex' justifyContent='end' alignContent='end' width='100%'>
                          <Link to={'/edit'}><Button size="large"><EditNoteOutlinedIcon /></Button></Link>
                          <Button size="large" color='error'><DeleteOutlinedIcon /></Button>
                      </Box>
                  </CardActions>
              </Card>
          </div>
      </>
  )
}

export default CardComponent;
