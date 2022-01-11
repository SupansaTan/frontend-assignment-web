import React from 'react';
import { Container } from 'react-bootstrap';

interface Props {
  children: JSX.Element
}

function LayoutComponent({ children }: Props) {
  return(
    <React.Fragment>
      <Container className="my-4">
        { children }
      </Container>
    </React.Fragment>
  )
}

export default LayoutComponent;