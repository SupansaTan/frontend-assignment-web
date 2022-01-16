import React from "react";
import { Lightbox } from "react-modal-image";

interface Props {
  src: string
  showModal: boolean
  changeShowModal: () => void;
  stylesClass?: string
}

function ModalImageComponent(props: Props) {
  return(
    <React.Fragment>
      {
        props.showModal && (
          <Lightbox
            className={props.stylesClass? props.stylesClass:''}
            medium={props.src}
            hideDownload={true}
            hideZoom={true}
            onClose={props.changeShowModal}
          />
        )
      }
    </React.Fragment>
  )
}

export default ModalImageComponent;