import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap'

interface Props {
  message: string
}

function ToastComponent(props: Props) {
  return(
    <React.Fragment>
      <ToastContainer className="p-3" position={'top-center'}>
        <Toast>
          <Toast.Header closeButton={true}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
          </Toast.Header>
          <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
      </ToastContainer>
    </React.Fragment>
  )
}