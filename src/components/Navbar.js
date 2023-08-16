import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


export default function CustomNavbar() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' }}>
        <Container>
          <Navbar.Brand to='/'>Workout Buddy</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className="nav-link">Homepage</Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>   
    </>
  )
}
