import { Parallax } from "react-parallax";
import './aboutPage.css'


const Imagetwo = () => (
    <Parallax  className="image" 
    bgImage="otherimages/logomandy.jpeg"  alt='logomandy'
    strength={800}>
        <div className='content'>
       <span className="img-txt "> Since 2012</span> 
        </div>
    </Parallax>

);

export default Imagetwo