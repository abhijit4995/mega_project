import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
function Footer(){
    return(
        <Navbar bg="dark" variant="dark" >
        <Container>
          <Row className="w-100">
            <Col className="text-center text-white">
              <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </Navbar>
    )
}
export default Footer;

// fixed="bottom"