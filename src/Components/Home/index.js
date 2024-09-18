import React from 'react';
import Banner from '../../assests/Lambo.jpg'
import Header from '../Layout/header';
import Banner1 from '../../assests/Bently.jpg'
import Carousel from 'react-bootstrap/Carousel';
 
const index = () => {
  return (
  <>
    <Header/>
    <Carousel>
      <Carousel.Item>
        <img src={Banner1} width="100%"></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Banner1} width="100%"></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Banner1} width="100%"></img>
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

export default index