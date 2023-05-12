import 'bootstrap/dist/css/bootstrap.min.css';
import './bags.css'

function bags () {
  return (
    <div className='container productcontainer' >
      <div className='row heading'>
      <h1 className='productname'>BAGS</h1>
            <div className='description'><p>
       handwoven bags
          </p></div>
      </div>


         <div className='row productrow' >
        <div className='col-md-6  firstcol'>
          <div>
          <img variant="top" src="productimages/bag4.jpg"  alt='product' />
          </div>
        </div >
    

        
            <div  className='col-md-6  secondcol'>
         
          <div className='price'>
        GH&cent;300
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
          {/* next product
           */}

<div className='container productcontainer nextcontainer' >
      
         <div className='row productrow' >
        <div className='col-md-6  firstcol'>
          <div>
          <img variant="top" src="productimages/cape5.jpg"  alt="product"/>
          <img variant="top" src="productimages/cape6.jpg" alt='' />
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
          </div>

          </div >   

</div >
    </div >
    </div >
         );
}

export default bags;