import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css'

function oversizedhats () {
  return (
    <div className='container productcontainer' >
      <div className='row heading'>
      <h1 className='productname'>OVERSIZED HATS</h1>
            <div className='description'><p>
       Oversized hats  of  cloth, for your outdoor pleasure.
          </p></div>
      </div>


         <div className='row productrow' >
        <div className='col-md-6  firstcol'>
          <div>
          <img variant="top" src="productimages/hat1.jpg"  alt='product' />
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

export default oversizedhats;