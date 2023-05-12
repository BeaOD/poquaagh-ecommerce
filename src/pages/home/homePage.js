import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player'
import './homePage.css'
//import { Link } from 'react-router-dom';

function homePage() {
  return (
    <> 
    <div className='container' fluid>
    <div className='row  row1'>
    <div className='col-md-7'>
       {/* first row of video and text */}
      <div className='video'>
    <ReactPlayer url={'/video/homep.mp4 '} controls={true} autoPlay loop/>
    </div>
    </div>
    
    <div className='col-md-5 righttext'>
      <h3>Poquaa GH</h3>
      <p>Take a piece of culture with you everyday</p>
      <p>Mandy</p>
      <p> - CEO</p>
      </div>
    </div>

    <div className='row'>
      <h6 style={{letterSpacing:'2px', paddingTop:'7px', backgroundColor:'blanchedalmond', 
       height:'40px', textAlign:'center',
       width:'300px', marginTop:'20px'
      }}>
        Handcrafted
      </h6>
    </div>
 {/* second row of images and text */}
    <div className='row row2'>
    <div className='col-md-4 '>
    <div>
    <img
          src="otherimages/cape1.jpeg"
          alt="Ntoma Accessories"
          className="imgshop"
        />
       </div>
    </div>

    <div className='col-md-4 '>
    <div className='middletext'>
      <h3>Poquaa GH</h3>
      <p>Take a piece of culture with you everyday</p>
      <p>Mandy</p>
      <p> - CEO</p>
      </div>
    </div>

    <div className='col-md-4 '>
    <div>
    <img
          src="otherimages/cape3.jpeg"
          alt="Accessories"
          className="imgshop"
        />
       </div>
    </div>
    </div>
    </div>
    <div className='row'>
      <h6 style={{letterSpacing:'2px', backgroundColor:'blanchedalmond', height:'40px', 
      textAlign:'center', width:'300px',  marginTop:'20px', paddingTop:'7px'}}>
        Soft Fabric
      </h6>
    </div>

    <div className='container' >
    <div className=' row'>
    <div className='col '></div>
    <div className='parallax'>
    <img
         src="otherimages/cape1.jpeg"
         alt="Ntoma"
         className="imgshopL"
       />
    </div>

    <div style={{height: '80px', backgroundColor:'purple', fontSize:'30px'}}>some text here</div>
    </div>
    </div>
    
    </>
   

  )
}

export default homePage