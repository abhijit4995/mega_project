import React from 'react'
import Header from '../Layout/header';
import Footer from '../Layout/footer';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import lap111 from '../../assests/lap111.jpg';
import lap22 from '../../assests/lap22.jpg';
import lap3 from '../../assests/lap3.jpg';

const Product = () => {
  return (
    <>
    <Header />
    <h2><center>Products</center></h2>
    <CardGroup>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={lap111} />
      <Card.Body>
        <Card.Title>HP Laptop</Card.Title>
        <Card.Text>
          HP 15 Core i5 13th Gen (16GB RAM/512GB SSD/FHD/Windows 11/MS Office/Backlit KB/15.6” (39.6cm)/Silver/1.59kg) fd0316TU Laptop
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={lap22} />
      <Card.Body>
        <Card.Title>MacBook</Card.Title>
        <Card.Text>
          Apple 2024 MacBook Air 13″ Laptop with M3 chip: 34.46 cm (13.6″) Liquid Retina Display, 8GB Unified Memory, 512GB SSD Storage, Backlit Keyboard, 1080p FaceTime HD Camera, Touch ID- Space Grey
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={lap3} />
      <Card.Body>
        <Card.Title>Dell Laptop</Card.Title>
        <Card.Text>
          Dell [Smartchoice] Core i3-1215U, 12th Gen (8GB RAM/512GB SSD/FHD/Window 11/MS Office' 21/15"(38 cm)/15 Month McAfee/Black/1.48kg Laptop
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    <CardGroup>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={lap111} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={lap22} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={lap3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    <CardGroup>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={lap111} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={lap22} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={lap3} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </CardGroup>
    <Footer/>
    </>
  )
}

export default Product
