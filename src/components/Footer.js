import { Email, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import React from 'react'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
       
         <div className='socialMedia'>
            <Email/>
            <GitHub/>
            <LinkedIn/>
            <Instagram/>
         </div>
         <p> &copy; 2022 Tommy Ferdian</p>
    </div>
  )
}

export default Footer