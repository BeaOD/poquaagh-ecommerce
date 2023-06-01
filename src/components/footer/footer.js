import React from 'react'
//import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaInstagramSquare, FaTiktok } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { MdOutlineCall } from 'react-icons/md'
import { CiLocationOn } from 'react-icons/ci'

import './footer.css'

function footer() {
  return (
    <div className='container footer '>
        <div className='row' style={{backgroundColor:'rgb(172, 143, 172)', paddingTop:'5px'}}>
            <div className='col-md-4'> 
            <div className='socialicons'>
            <h6>We Are Social</h6>
  
     <a href='https://instagram.com/poquaagh?igshid=YmMyMTA2M2Y='>
    <FaInstagramSquare style={{color:'purple', width:'33px' ,  height:'38px', paddingRight:'7px'}}/> </a>
    
     <a href='https://www.tiktok.com/@poquaagh?'>
    <FaTiktok style={{width:'33px' ,  height:'26px', color:'purple'}}/> </a>

    <a href='https://www.facebook.com/poquaagh?mibextid=ZbWKwL'>
    <FaFacebook style={{color:'purple', width:'33px' ,  height:'38px', paddingRight:'7px'}}/> </a>
    
    
     
    </div></div>
            <div className='col-md-4'>
              <h6>Customer Care</h6>
              <a href='https://api.whatsapp.com/send?phone=233243038816'>
    <BsWhatsapp style={{width:'33px' ,  height:'26px', color:'purple'}}/>
    <span style={{color:'black'}}>Click to chat </span> </a>
    
              <p style={{marginTop:'5px'}} >
              <MdOutlineCall style={{width:'33px' ,  height:'26px', color:'purple', marginBottom:'5px'}}/> 
              <span  style={{color:'black'}}>020 860 6861 </span>
              </p>
            </div>
        

            <div className='col-md-4'>
            <h6>Locate Us</h6>
           
            <a href='https://goo.gl/maps/dfqXB4aqfPkiwi6e8'>
            <CiLocationOn style={{width:'33px' ,  height:'26px', color:'purple'}}/>
            <span style={{color:'black'}}>In-Store Shopping </span></a>
            <p style={{color:'black'}}>Mallam,Gbawe, Opposite Netab Pharmacy, Accra-Ghana</p>

            </div>
            </div>

<div className='row' >
<div className="fa fa-copyright" aria-hidden="true" 
style={{fontSize:'11px',fontFamily:'cursive', 
backgroundColor:'white', color:'black', textAlign:'center'}}>
            ©2023 POQUAA GH. All Rights Reserved.
            </div>
            </div>
            </div>
  )
}

export default footer






