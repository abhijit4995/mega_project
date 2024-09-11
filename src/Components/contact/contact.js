import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Contact = () => {
  return (
    <>
    <h2>Contact</h2>
    <Row>
        <Form.Label column="lg" lg={2}>
          Name :
        </Form.Label>
        <Col>
          <Form.Control size="lg" type="text" placeholder="Enter your Name" />
        </Col>
    </Row>
      <br />
      <Row>
        <Form.Label column="lg" lg={2}>
          Email :
        </Form.Label>
        <Col>
          <Form.Control size="lg" type="email" placeholder="Enter your Email" />
        </Col>
    </Row>
      <br />
      <Row>
        <Form.Label column="lg" lg={2}>
          Number :
        </Form.Label>
        <Col>
          <Form.Control size="lg" type="text" placeholder="Enter your Number" />
        </Col>
    </Row>
      <br />
      <Row>
        <Form.Label column="lg" lg={2}>
          Text :
        </Form.Label>
        <Col>
          <Form.Control size="lg" type="text" placeholder="Enter text" />
        </Col>
      </Row>
      <br />
      <Button type="submit" className="mb-2">
            Submit
      </Button>
    </>
  )
}

export default Contact