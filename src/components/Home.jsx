import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Box, Button, TextField, Typography,Modal } from '@mui/material'
import { Card, CardActions, CardContent } from '@mui/material'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddIcon from '@mui/icons-material/Add';
import Header from './Header';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
function Home() {

    const [allDocs, setAllDocs] = useState([])
    const [docTitle, setDocTitle] = useState("")
    const [reload, setReaload] = useState('')
    const [show, setShow] = useState(false);


    const docsCollectionRef = collection(db, 'documents')

    const getAllDocs = async () => {
        const docsData = await getDocs(docsCollectionRef)
        const data = docsData.docs.map(doc => (
            {
                ...doc.data(),
                id: doc.id
            }
        ))
        setAllDocs(data)
    }

    const postData = async () => {
        await addDoc(docsCollectionRef, {
            title: docTitle,
            discription: ""
        })
        setReaload(docTitle)
    }

    const deleleDocs = async (id) => {
        const oneDoc = doc(db, 'documents', id)
        await deleteDoc(oneDoc)
        setReaload(id)
    }

    useEffect(() => {
        getAllDocs()
    }, [reload])


    const handleAdd = () => {
        postData()
        alert(`Document ${docTitle} added successfully`)
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const navigate = useNavigate()

    const handleEdit = (data) => {
        navigate('/edit', { state: data })
    }

    const handleChange = (e) => {
        setDocTitle(e)
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
    const style2={
        height:'80vh'
    }
    return (
        <>
            
                <div className='homebody' style={{ width: '100%'}}>
                    <Header />
                    <Box display='flex'>
                        <Button className='btn' onClick={handleShow} variant='outlined' startIcon={<AddIcon />} style={{ width: '200px', margin: 'auto',color:'blue' }}>Add Document</Button>

                    </Box>
                </div>
                <div className="row" style={{height:'82vh'}}>
                    {allDocs?.length > 0 ? allDocs.map((item) => (
                        <div key={item.id} className="col-lg-4 mb-4">
                            <Card className='card' sx={{ maxWidth: 345,maxHeight:400}}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <h4 className='mb-0'>{item.title}</h4>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {item.discription.replace(/<[^>]+>/g, '')}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Box display='flex' justifyContent='end' alignContent='end' width='100%'>
                                        <Button size="large" onClick={() => handleEdit(item)}><EditNoteOutlinedIcon /></Button>
                                        <Button size="large" color='error' onClick={() => deleleDocs(item.id)}><DeleteOutlinedIcon /></Button>
                                    </Box>
                                </CardActions>
                            </Card>
                        </div>
                    ))
                        :
                        <div>
                            <Box sx={style2} display='flex' justifyContent='center' alignItems='center'width='100%' >
                                <h3 className='text' style={{height:'50px'}}>Click on <AddCircleOutlineIcon/> button to add Notes</h3>
                            </Box>
                        </div>
                    }

                </div>
                <Modal open={show}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box style={{ borderRadius: '10px' }} sx={style1} display='flex'>
                        <TextField style={{ width: '90%' }} id="outlined-basic" label="Document Name" variant="outlined" onChange={(e)=>handleChange(e.target.value)}/>
                        <Button onClick={handleAdd} variant='contained' ><DoneOutlinedIcon /></Button>
                    </Box>
                </Modal>
            
        </>
    )
}

export default Home