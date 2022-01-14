import React, { useCallback, useEffect, useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface Props {
  children: JSX.Element
}

function LayoutComponent({ children }: Props) {
  const [isScroll, setIsScroll] = useState(false)

  const handleScroll = useCallback((event) => {
    let scrollTop = event.target.scrollingElement.scrollTop
    if(scrollTop >= 20) {
      setIsScroll(true)
    }
    else {
      setIsScroll(false)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true)

    return() => {
      window.removeEventListener("scroll", handleScroll, true)
    }
  }, [handleScroll])

  return(
    <React.Fragment>
      <Navbar className={"bg-blue " + (isScroll? '':'d-none')} sticky="top">
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