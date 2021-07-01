import React from 'react'
import './modal.css'

const Modal = ({isDelete, text, setModal, deleteAllItems}) => {

const handleCancel = (e)=> {
    if (e.target === e.currentTarget){

        setModal(()=> {
            return false;
        })
    }
}

const handleOk =()=> {
    if (isDelete){
        deleteAllItems();
        setModal(()=> {
            return false;
        })
    } else {
        setModal(()=> {
            return false;
        })
    }
}


    return (
        <div onClick={handleCancel} className="modal-bg">
            <div className="card">
                <p className="modal-text">{text}</p>

                <div className="button-wrapper">
                {isDelete ? <button onClick={handleCancel} className="cancel-button">ÅNGRA</button> : ''}
                <button onClick={handleOk} className="Ok-button">OK</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
