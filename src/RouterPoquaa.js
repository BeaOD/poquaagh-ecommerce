import React from 'react'
import { BrowserRouter as Router,Routes,Route, } from 'react-router-dom'
import Nav from './components/nav/nav'
import Footer from './components/footer/footer'
import HomePage from '../src/pages/home/homePage'
import AboutPage from '../src/pages/about/aboutPage'
import LoginPage from './pages/login/loginPage'
import Cape from '../src/pages/products/accessories/cape'
import Earring from '../src/pages/products/accessories/earring'
import Hair from '../src/pages/products/accessories/hair'
import Necklace from '../src/pages/products/accessories/necklace'
import Oversizedhats from '../src/pages/products/accessories/oversizedhats'
import Kimono from '../src/pages/products/clothing/kimono'
import Bags from '../src/pages/products/clothing/bags'
import Sandals from '../src/pages/products/clothing/sandals'
import Slippers from '../src/pages/products/clothing/slippers'
import Onsale from '../src/pages/products/trending/onsale'
import Newarrivals from '../src/pages/products/trending/newarrivals'
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
        <Route path='/earring' element={<Earring/>}/>
        <Route path='/cape' element={<Cape/>}/>
        <Route path='/hair' element={<Hair/>}/>
        <Route path='/necklace' element={<Necklace/>}/>
        <Route path='/oversizedhats' element={<Oversizedhats/>}/>
        <Route path='/bags' element={<Bags/>}/>
        <Route path='/kimono' element={<Kimono/>}/>
        <Route path='/sandals' element={<Sandals/>}/>
        <Route path='/slippers' element={<Slippers/>}/>
        <Route path='/newarrivals' element={<Newarrivals/>}/>
        <Route path='/onsale' element={<Onsale/>}/>


        <Route path='/errorPage' element={<Errorpage/>}/>
      
        
        
    </Routes>
    {<Footer/>}
    </Router>
  )
}

export default router