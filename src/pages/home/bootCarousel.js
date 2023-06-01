import Carousel from 'react-bootstrap/Carousel';

export function CarouselTwo() {
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="productimages/hat1.jpg"
          alt="hat"
        />
        <Carousel.Caption>
        <h5 style={{color:'white', fontFamily:'cursive'}}>
          Oversized Hat
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="productimages/accessories1.jpg"
          alt="accessory"
        />

        <Carousel.Caption>
        <h5 style={{color:'white', fontFamily:'cursive'}}>
          Akyede3 Slippers
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="productimages/cape7.jpg"
          alt="cape"
        />

        <Carousel.Caption>
        <h5 style={{color:'white', fontFamily:'cursive'}}>
        Classy Cape
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>





</>
  );
}

