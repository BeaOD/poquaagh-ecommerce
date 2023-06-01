import Carousel from 'react-bootstrap/Carousel';

export function CarouselOne() {
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="productimages/bag1.jpg"
          alt="bag"
        />
        <Carousel.Caption>
        <h5 style={{color:'white', fontFamily:'cursive'}}>
          Afrocentric Bag
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="productimages/earring1.jpg"
          alt="earring"
        />

        <Carousel.Caption>
        <h5 style={{color:'white', fontFamily:'cursive'}}>
          Adinkra Earring
          </h5>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="productimages/slipper4.jpg"
          alt="slipper"
        />

        <Carousel.Caption>
          <h5 style={{color:'white', fontFamily:'cursive'}}>
          Akyede3 Slippers
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>





</>
  );
}

