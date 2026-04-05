import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../components/Header'
import { Col, Container, Row } from 'react-bootstrap';
import ServicesCard from '../../components/ServicesCard';
import axios from 'axios';


const Home = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/appointments/")
        setData(res.data)
        console.log(res.data);
        
      } catch (err) {
        console.log(err);

      }
      finally{
        // console.log(JSON.stringify(data))

      }
    }
    fetchData()
  }, [])
  const services = [
    {
      title: 'Clinic',
      img: 'https://plus.unsplash.com/premium_photo-1669675936121-6d3d42244ab5',
      desc: 'Book appointments with doctors and healthcare professionals',
      link: '#',
    },
    {
      title: 'Gym',
      img: 'https://plus.unsplash.com/premium_photo-1669675936121-6d3d42244ab5',
      desc: 'Schedule personal training sessions and fitness classes',
      link: '#',
    },
    {
      title: 'Salon',
      img: 'https://plus.unsplash.com/premium_photo-1669675936121-6d3d42244ab5',
      desc: 'Book haircuts, styling, and beauty services',
      link: '#',
    },
    {
      title: 'Spa',
      img: 'https://plus.unsplash.com/premium_photo-1669675936121-6d3d42244ab5',
      desc: 'Reserve relaxing massages and wellness treatments',
      link: '#',
    },
    {
      title: 'Dentist',
      img: 'https://plus.unsplash.com/premium_photo-1669675936121-6d3d42244ab5',
      desc: 'Schedule dental checkups and treatments',
      link: '#',
    }
  ]
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


      {/* services Container */}
      <Container className='mt-md-5' fluid>
        <Row className='g-4'>
          {services.map((value, i) => (
            <Col xs={12} md={4} key={i}>
              <ServicesCard data={value} />
            </Col>

          ))}
        </Row>



      </Container>

    </>
  )
}

export default Home