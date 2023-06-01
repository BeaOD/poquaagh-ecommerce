import Carousel from 'react-bootstrap/Carousel';

export function CarouselThree() {
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="productimages/bag3.jpg"
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
          src="productimages/cape5.jpg"
          alt="cape"
        />

        <Carousel.Caption>
        <h5 style={{color:'white', fontFamily:'cursive'}}>
          Style Cape
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="productimages/earring2.jpg"
          alt="earring"
        />

        <Carousel.Caption>
        <h5 style={{color:'white', fontFamily:'cursive'}}>
          Adinkra Earring
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>





</>
  );
}

