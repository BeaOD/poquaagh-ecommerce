import React from 'react'
import './loginPage.css'
//import { Col, Container,Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function loginPage() {
  return (
    <>
    <div className='container fluid'>
      <div className='row'>
      <img className="img-fluid d-block w-100  imgma" src="otherimages/logomandy.jpeg" alt="poquaagh logo"/>
           <div className='col-md-6'>
        <div>
          <div className='textform'>
      <form>
        <h5>POQUAA GH</h5>
        <p className='forgotp'>Login into existing account with your email and password</p>
 
  <label  placeholder='email'></label>
  <br/>
  <input type="email" id="email" name="lname" placeholder='Email*'  />
  <br/>
  <label placeholder='password'></label>
  <br/>
  <input type="password" id="password" name="pword" placeholder='password*'  />
  <label placeholder='rememberme' style={{alignItems:'right'}}>Remember me</label>
  <br/>
  <input type="checkbox" id="rememberme" name="rememberme" placeholder='password*'  />
    <br/><br/>
  <button>Login and Continue</button> 
  </form>
<br/>


<div className='row'>
  <div className='col-md-6'>
    <p className='forgotp'>Forgot Password?</p>
  </div>

  <div className='col-md-6'>
    <p className='rememberme'>Remember me</p>
  </div>
  </div>
  <br/>
  
  <div>
    <p>Not a Member?</p>
    <Link to='/'>
  <p className='signup'>Sign Up</p>
  </Link>
  </div>
</div>
</div>

        </div>
      </div>
     
       <div className='col-md-6'>
      <div className='textblock siderow'>
      
        <div><img className="img-fluid d-block w-100 bottomrow" src="otherimages/cape1.jpeg" alt="poquaagh logo"/></div>
      

       <div> <img className="img-fluid d-block w-100 bottomrow" src="otherimages/cape2.jpeg" alt="poquaagh logo"/></div>
        

   <div><img className="img-fluid d-block w-100 bottomrow" src="otherimages/cape3.jpeg" alt="poquaagh logo"/></div>
       
         <div><img className="img-fluid d-block w-100 bottomrow" src="otherimages/cape1.jpeg" alt="poquaagh logo"/></div>
        
         </div>
            </div>
    </div>
    
    
    </>
  )
}

export default loginPage