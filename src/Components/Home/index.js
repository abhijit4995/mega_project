import React from 'react';
import Banner from '../../assests/Lambo.jpg'
import Header from '../Layout/header';
import Footer from '../Layout/footer';
import Banner1 from '../../assests/Bently.jpg'
import Carousel from 'react-bootstrap/Carousel';
// import profile from '../../assests/pro.jpg'
// import profile1 from '../../assests/pro1.jpg'
import profile2 from '../../assests/pro2.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap';
 
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
    <Container fluid>
      <div class="justify-content-center">
      <Row>
        <Col><img src={profile2} width="100%" height="90%"></img></Col>
        <Col><p>A profile is a brief description of a person or organisation, usually written in a resume, article or document. It provides detailed information about a person or company, often sharing the background as a story and allowing readers to gain a better understanding of the person or organisation. Knowing how to write an article can help you increase reader interest in your company or present yourself more professionally.</p></Col>
      </Row>
      <Row>
        <Col><p>A profile is a brief description of a person or organisation, usually written in a resume, article or document. It provides detailed information about a person or company, often sharing the background as a story and allowing readers to gain a better understanding of the person or organisation. Knowing how to write an article can help you increase reader interest in your company or present yourself more professionally.</p></Col>
        <Col><img src={profile2} width="100%" height="90%"></img></Col>
      </Row>
      <Row>
        <Col><img src={profile2} width="100%" height="90%"></img></Col>
        <Col><p>A profile is a brief description of a person or organisation, usually written in a resume, article or document. It provides detailed information about a person or company, often sharing the background as a story and allowing readers to gain a better understanding of the person or organisation. Knowing how to write an article can help you increase reader interest in your company or present yourself more professionally.</p></Col>
      </Row>
      </div>
    </Container>
    <Footer/>
    </>
  )
}

export default index