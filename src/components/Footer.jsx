import React from 'react'
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
function Footer() {
  return (
    <>
    <div className="footer" style={{textAlign:'center',bottom:'0px',backgroundColor:'blue',padding:'10px',marginBottom:'0px',marginTop:'0px'}}>
        <footer>
            <p style={{fontSize:'20px'}} >Copyright <CopyrightOutlinedIcon/> 2024 <span>NoteWave</span>&ensp;<i className="fa-solid fa-registered" ></i></p>
        </footer>
    </div>
    </>
  )
}

export default Footer