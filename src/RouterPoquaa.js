import React from 'react'
import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom'
import Nav from './components/nav/nav'
import Footer from './components/footer/footer'
import HomePage from '../src/pages/home/homePage'
import AboutPage from '../src/pages/about/aboutPage'
import LoginPage from './pages/login/loginPage'
import Cape from '../src/pages/products/accessories/cape'
import Earrings from '../src/pages/products/accessories/earrings'
import Hair from '../src/pages/products/accessories/hair'
import Necklace from '../src/pages/products/accessories/necklace'
import Oversizedhats from '../src/pages/products/accessories/oversizedhats'
import Errorpage from './pages/errorpage'


const router = () => {
  return (
    <Router>
        <div>
        {<Nav/>}
        </div>

    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/aboutPage' element={<AboutPage/>}/>
        <Route path='/loginPage' element={<LoginPage/>}/>
        <Route path='/earrings' element={<Earrings/>}/>
        <Route path='/cape' element={<Cape/>}/>
        <Route path='/hair' element={<Hair/>}/>
        <Route path='/necklace' element={<Necklace/>}/>
        <Route path='/oversizedhats' element={<Oversizedhats/>}/>


        <Route path='/errorPage' element={<Errorpage/>}/>
      
        {<Footer/>}
        
    </Routes>
    </Router>
  )
}

export default router