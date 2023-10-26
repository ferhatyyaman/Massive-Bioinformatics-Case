import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

export const NavbarComponent = () => {
  return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
          <Image
              src="/MASSIVE-BIOINFORMATICS-LOGO-VEKTO_REL-beyaz.png"
              width="50"
              height="50"
            />{' '}
            Massive Bioinformatics</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}
