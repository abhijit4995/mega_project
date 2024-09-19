import React from 'react';
import Header from '../Layout/header';
import Footer from '../Layout/footer';
import profile2 from '../../assests/pro2.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <>
    <Header/>
    <h2><center>About Us</center></h2>
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

export default About


