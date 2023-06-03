import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css'

function Sandals () {
  return (
    <div className='container productcontainer' >
      <div className='row heading'>
          <button variant="primary" className='addcart'>Add to art</button>
      <h1 className='productname '>SANDALS</h1>
            <div className='description'><p>
         Handcrafted  footwear and very easy to walk in.
         </p></div>
      </div>


         <div className='row productrow' >
        <div className='col-md-6  firstcol'>
          <div>
          <img variant="top" src="productimages/slipper2.jpg"  alt='product' />
          </div>
        </div >
    

        
            <div  className='col-md-6  secondcol'>
         
          <div className='price'>
        GH&cent;400
        </div>
        <hr/>

        <label >Stock</label>
        <br/>
        <input type='' className='instock'/>
        <br/> <br/>
       
        
        <label className='quantity'>Quantity</label>
        <br/>
        <input type='number'/>
        <br/>

          <button variant="primary" className='addcart'>Add to Cart</button>
          


</div >
    </div >
    </div >
         );
}

export default Sandals;