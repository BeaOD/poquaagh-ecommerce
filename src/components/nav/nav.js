import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiCartAlt } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './nav.css'

function nav() {
  return (
    <>
    <nav  className='fluid'>
        <div className='container'>
        <div className='row firstnavrow'>
        <div className='col-md-2'>
            {/* this image is homepage */}
            <Link to='/'>
        <img src='otherimages/logomandy.jpeg'
     style={{height:'70px', width:'140px',  }}  
     alt='poquaagh logo'
     className='zoom plogo'/>
     </Link>
        </div>

       <div className='col-md-2'></div>

        <div className='col-md-6 searchcol'>
        <Link to='/searchitem'>
        <button type="search" name="search" placeholder='search' className='searchbuttons'>
                     <BsSearch /> <span> Search </span>
          </button> 
          </Link>     
        </div>

        <div className='col-md-1 relative1 '>
               <div className=' cart'>
                <Link to='/addtoCart'>
            <BiCartAlt style={{fontSize: "1.6em",  color:' rgb(77, 77, 77)'}}  /> 
            </Link>
        </div>
        </div>
        
        <div className='col-md-1  relative '>
               <div className=' person'> 
               <Link to='/loginPage'>   
            <BsFillPersonFill style={{fontSize:"1.8em", color:' rgb(77, 77, 77)'}}/>   
            </Link>     
        </div>
        </div>


        </div>
        </div>
        </nav>
         
        {/* second navbar */}
        <nav >
        <div  className='container' style={{marginTop:'10px' }}>
        <div className='row secondnavrow'   >
            <div className='col-md-3'>
        <div className="dropdown ">
  <button className="dropbtn " > TRENDING  | </button>
  <div className="dropdown-content">
    <Link to='/newarrivals' href='#'>NEW ARRIVALS</Link>   
    <hr/>
    <Link to='/onsale' href='#'>ON SALE</Link>
   
    </div>
</div>
</div>

        <div className='col-md-3'>
        <div className="dropdown">
  <button className="dropbtn" style={{fontSize:'14px'}} > CLOTHING  |</button>
  <div className="dropdown-content">
  <Link to='/kimono' href='#' >KIMONO</Link>
    <hr/>
    <Link to='/bags' href='#'>BAGS</Link>
    <hr/>
    <Link to='/slippers' href='#'>SLIPPERS</Link>
    <hr/>
    <Link to='/sandals'href='#'>SANDALS</Link>
  </div>
</div>
</div>



        <div className='col-md-3' >
        <div className="dropdown">
  <button className="dropbtn" style={{textAlign:'center'}} > FASHION ACCESSORIES |</button>
  <div className="dropdown-content">
  <Link to='/cape'>CAPES</Link>
    <hr/>
    <Link to='/earring'>EARRINGS</Link>
    <hr/>
    <Link to='/necklace'href='#'>NECKLACES</Link>
    <hr/>
    <Link to='/hair' href='#'>HAIR ACCESSORIES</Link>  
    <hr/>
    <Link to='/oversizedhats' href='#'>OVERSIZED HATS</Link>  
  </div>
</div>
</div>


<div className='col-md-3'>
        <div className="dropdown">
          <Link to='/aboutPage' href='#'>
  <button className="dropbtn">ABOUT US |</button>
  </Link>
</div>
</div>
        </div>
        </div>
    </nav>

{/* <div className='container'>
  <div>WELCOME</div>

</div> */}

    </>
  )
}

export default nav