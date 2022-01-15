import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap'

interface Props {
  status: boolean
  message: string
  stylesClass: string
}

function ToastComponent(props: Props) {
  return(
    <React.Fragment>
      <div
        aria-live="polite"
        aria-atomic="true"
        className={"position-fixed " + props.stylesClass }
        style={{ top: '20px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <ToastContainer className="p-3" position={'top-center'}>
          <Toast className="bg-success text-white">
            <Toast.Body>
              <i className="bi bi-check-circle-fill me-2"></i>
              { props.message }
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </React.Fragment>
  )
}

export default ToastComponent;