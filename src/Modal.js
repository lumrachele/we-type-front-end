import React from 'react'
import ModalStyle from './Modal.css'

const Modal = ({show, children }) => {
  // const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        {children}
      </section>
    </div>
  );
};

export default Modal
