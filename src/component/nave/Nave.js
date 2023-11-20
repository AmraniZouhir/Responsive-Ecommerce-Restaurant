import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NaveStayle.css'
import logo from './../../asetse/logo.png'

export default function Navee() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} title='logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#link">Explore Foods</Nav.Link>
          <Nav.Link href="#link">Reviews</Nav.Link>
          <Nav.Link href="#link">FAQ</Nav.Link>
          <Nav>
            <Nav.Link href="#deets" className='call'>+212 695150342</Nav.Link>
           
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
