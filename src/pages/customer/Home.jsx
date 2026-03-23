import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../components/Header'


const Home = () => {

  return (
    <>
      <Header />

      <Carousel fade>
        <Carousel.Item>
          <img src='https://images.unsplash.com/photo-1595134334453-46c042d486f9' className='img-fluid' alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://images.unsplash.com/photo-1595134334453-46c042d486f9' className='img-fluid' alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://images.unsplash.com/photo-1595134334453-46c042d486f9' className='img-fluid' alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Home