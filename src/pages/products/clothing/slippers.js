import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css'

function Slippers () {
  return (
    <div className='container productcontainer' >
      <div className='row heading'>
      <h1 className='productname'>SLIPPERS </h1>
            <div className='description'><p>
        Comfortable handmade slip-on to be worn in or outdoor.
          </p></div>
      </div>


         <div className='row productrow' >
        <div className='col-md-6  firstcol'>
          <div>
          <img variant="top" src="productimages/slipper1.jpg"  alt='product' />
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

export default Slippers;