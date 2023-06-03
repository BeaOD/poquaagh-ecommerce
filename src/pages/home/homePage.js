import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player'
import './homePage.css'
import { CarouselOne } from './bootCarousell';
import { CarouselTwo } from './bootCarousel'; 
import { CarouselThree } from './bootCarouse';


function homePage() {
  return (
    <> 
    <div className='container' >
    <div className='row  row1'>
    <div className='col-md-5'>
       {/* first column before text */}
 
    </div>
    
    <div className='col-md-7 righttext'>
      {/* <h3 style={{fontFamily:'cursive', letterSpacing:'4px',  color:'whitesmoke'}}>Poquaa GH</h3> */}
      <br/>
      <p style={{fontFamily: 'serif', letterSpacing:'2px'}}>
        <b>A piece of</b></p>
      <p style={{fontFamily: 'cursive', letterSpacing:'2px', fontSize:'26px', color:'whitesmoke'}}>
         african culture and class</p>
      <p style={{fontFamily: 'serif', letterSpacing:'2px'}}> with you everyday </p>
      {/* <p style={{fontFamily: 'monospace', letterSpacing:'2px',  color:'whitesmoke'}}>Poquaa</p> */}
      <br/> 
      <p style={{fontFamily: 'monospace', letterSpacing:'2px',  color:'whitesmoke'}}> <b>- CEO</b></p>
      </div>
    </div>

  
    <div className='row gallery' >
      <h6 style={{  color:'purple', 
        textAlign:'center',
       width:'100%', marginTop:'15px'
      }}>
       <hr/>
      </h6>
    </div>
    
 {/* middle gallery */}
    <div className='container ' >
    <div className=' row '>
    <div className=' col-md-4 gallery'>
    <CarouselOne/>
    </div>

    <div className=' col-md-4 gallery1'>
    <CarouselTwo/>
    </div>

    <div className=' col-md-4 gallery2'>
    <CarouselThree/>
    </div>

    <div className='row'>
      <h6 style={{  color:'purple', 
        textAlign:'center',
       width:'100%', marginTop:'25px'
      }}>
       <hr/>
      </h6>
    </div>


 {/* final row of images and text */}
    <div className='row row2'>
    <div className='col-md-4 '>
    <div>
    <img
          src="otherimages/newcape 2.jpeg"
          alt="Ntoma Accessories"
          className="imgshop1"
        />
       </div>
    </div>

    <div className='col-md-4 '>
    <div className='middletext' style={{fontFamily:'cursive'}}>
      <p> African </p>
      <p> Bold</p>
      <p>Classy</p>
      <p> Unique </p>
      <p> Colourful</p>
      <p> Handcrafted</p>
      </div>
    </div>

    <div className='col-md-4 '>
    <div>
    <img
          src="otherimages/newcape1.jpeg"
          alt="Accessories"
          className="imgshop2"
        />
       </div>
    </div>
    </div>
    </div>
    <div className='row'>
      <h6 style={{  color:'purple', 
        textAlign:'center',
       width:'100%', marginTop:'5px',
       marginBottom:'40px'
      }}>
       <hr/>
      </h6>
    </div>
     
    {/* video row */}
    <div className='container'>
    <div className='row videorow'>
    <div className='col-md-4' style={{textAlign:'center', color:'purple'}}>
      <p  style={{fontFamily:'cursive', fontSize:'50px', paddingTop:'30px'}}> <b>
       Trendy 
      </b>
      </p>

      <p  style={{fontFamily:'cursive', fontSize:'50px'}}> <b>
      Styles 
      </b>
      </p>

      <p  style={{fontFamily:'cursive', fontSize:'30px'}}>On Every Occasion</p>
     
      <p  style={{fontFamily:'cursive', fontSize:'30px'}}>In Every Season</p>
    </div>

    <div className='col-md-8'>
    <div className='video'>
    <ReactPlayer url={'/productimages/blackbag.MOV '} controls={true} autoPlay loop/>
    </div>
    </div>
    </div>
    </div>

    
    </div>
    </div>
    
    </>
   

  )
}

export default homePage