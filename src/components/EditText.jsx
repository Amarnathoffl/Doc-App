import React, { useEffect, useState } from 'react'
import "quill/dist/quill.core.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { Dropdown } from 'react-bootstrap';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function EditText() {
  const location = useLocation()
  const data = location.state
  const [displayValue,setDisplayValue] = useState(data.discription)

  const handleChange =(e)=>{
    setDisplayValue(e)
  }

  // console.log(displayValue);
  
  const editDiscription = async()=>{
    const oneDoc = doc(db,'documents',data.id)
    // console.log(oneDoc);
    updateDoc(oneDoc,{
      discription:displayValue
    })
  }

  useEffect(()=>{
    editDiscription()
  },[displayValue])

    const [value,setvalue]=useState('');
    var toolbarOptions = [['bold', 'italic', 'underline'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    // [{ 'direction': 'rtl' }],                         // text direction
  
    // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }]
    // [{ 'align': [] }]
  
    ];
    const module= {
        toolbar: toolbarOptions
      }
  return (
    <>
    <div className="edittext" style={{textAlign:'center'}}>
    <h2 style={{height:'30px'}} className='mt-3 text-start ms-4'><Link to={'/home'}><ArrowBackIcon/></Link>&ensp;{data.title}</h2>
    <ReactQuill modules={module} theme='snow' value={displayValue} onChange={(e)=>handleChange(e)} placeholder='Type note here...' style={{height:'50vh',marginBottom:'210px',width:'100%',lineHeight:'0px',backgroundColor:'white',marginTop:'40px'}}></ReactQuill>
    {/* <Button variant='contained' style={{marginTop:'40px',marginBottom:'170px',marginLeft:'90%'}}>Save</Button> */}
    </div>
    </>
  )
}

export default EditText