import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './signupPage.css'

function homePage() {
  return (
    <>
    {/* // <!--container/body--> */}
<div className="container fluid" >
  <div className="row row1">
    <div className="col-md-8 img-fluid img1">
    <div className='formdiv'>
    <p style={{paddingLeft:'80px'}}>Create an account here</p>

       <form className='roundeddiv'>
  <label for="first name" > First Name*</label>
  <br/>
  <input type="text" id="fname" name="fname" />
  <br/><br/>

  <label for="last name" > Last Name*</label>
  <br/>
  <input type="text" id="lname" name="lname" />
  <br/><br/>

  <label for="email" > Email*</label>
  <br/>
  <input type="email" id="email" name="email" />
  <br/><br/>

  <label for="email" >Confirm Email*</label>
  <br/>
  <input type="email" id="email" name="email" />
  <br/><br/>

  <label for="password">Password*</label>
  <br/>
  <input type="password" id="password" name="pword" />
  <br/><br/>

  <label for="confirmpassword" >Confirm Password*</label>
  <br/>
  <input type="password" id="confirmpassword" name="confirmpword"  />
    <br/><br/>
  <button className='signupsubmit'>Continue</button> 
</form>
<br/>
<br/>
</div>
    </div>  
  </div>

  <div className='col-md-4'>
  <div className=" text-block">
  <img className=" img-fluid d-block w-100" src="otherimages/purplelogo.jpg" alt="..."/>
      <h1 className='claasyk'>Welcome</h1>

      <p className='claasyk' >Classy Kente & Ntoma Accessories</p>
      <br/>
     <div>
        <p className='claasyk'>Already a member?</p>
      <button className='loginonsignup' >Login</button>
      </div>
    </div>
  </div>

 
  </div>
  </>

  )
}

export default homePage