import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css'

function Kimono () {
  return (
    <div className='container productcontainer' >
      <div className='row heading'>
      <h1 className='productname'>KIMONO </h1>
            <div className='description'><p>
            A long, loose traditional Japanese robe with wide sleeves, tied with a sash.
          </p></div>
      </div>


         <div className='row productrow' >
        <div className='col-md-6  firstcol'>
          <div>
          <img alt="product kimono" variant="top" src="otherimages/cape3.jpeg"  />
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

export default Kimono;