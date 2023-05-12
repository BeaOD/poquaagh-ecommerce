import { Parallax } from "react-parallax";
import './aboutPage.css'

const Imageone = () => (
    <Parallax  className="image" 
    bgImage="otherimages/mandy.jpeg"  alt='mandypicture'
    strength={800}>
        <div className='content'>
       <span className="img-txt ">
         who we are
       </span> 
        </div>
    </Parallax>

);

export default Imageone