import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface Props {
  children: JSX.Element
}

function LayoutComponent({ children }: Props) {
  return(
    <React.Fragment>
      <Navbar className="bg-blue" sticky="top">
        <Container>
          <Navbar.Brand href="/" className="fw-bold text-white">เที่ยวไหนดี</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="my-4">
        { children }
      </Container>
    </React.Fragment>
  )
}

export default LayoutComponent;