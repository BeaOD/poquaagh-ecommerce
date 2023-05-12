import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css'

function earring () {
  return (
    <div className='container' >
      <div className='row heading'>
      <h1 className='productname'>EARRINGS </h1>
            <div className='description'><p>
        Made from metal
          </p></div>
      </div>


         <div className='row productrow' >
        <div className='col-md-6  firstcol'>
          <div>
          <img variant="top" src="productimages/earring1.jpg"  alt='product' />
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

          <button variant="primary" className='addcart'>Add to cart</button>
          


</div >
    </div >
    </div >
         );
}

export default earring;