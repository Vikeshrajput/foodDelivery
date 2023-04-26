import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>    
    </div>
};


const Modal = (props) => {
    const Overlay = document.getElementById('overlay-root');
    const backdrop = document.getElementById('backdrop-root');
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClose} />,backdrop)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,Overlay)}
        </Fragment>
    );
};

export default Modal;