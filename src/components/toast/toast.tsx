import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap'

interface Props {
  status: string;
  message: string
}

function ToastComponent(props: Props) {
  return(
    <React.Fragment>
      <ToastContainer className="p-3" position={'top-center'}>
        <Toast>
          <Toast.Body>
            { props.message }
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </React.Fragment>
  )
}

export default ToastComponent;