import { createPortal } from 'react-dom';
import { useRef, useEffect } from 'react';
import './Modal.css';

function Modal({ children, open }) {
    const dialog = useRef();
    const effect = useEffect(() => {
        if(open) {
            dialog.current.showModal();
        }else{
            dialog.current.close();
        }
    }, [open])

    return createPortal(<dialog ref={dialog}>{children}</dialog>, document.querySelector('#modal'));
};

export default Modal;