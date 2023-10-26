import React from 'react'
import Container from 'react-bootstrap/Container';
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
        </Container>
      </Navbar>

    </div>
  )
}
