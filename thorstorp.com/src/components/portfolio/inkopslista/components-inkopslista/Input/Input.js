import React from 'react'
import './input.css'
import { useState, useRef } from 'react'
import Modal from './Modal';


const Input = ({ addItem, deleteAllItems }) => {

    const [inputItem, setInputItem] = useState('');
    const inputRef = useRef();
    const [modal, setModal] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    const handleAddClick = () => {

        if (inputItem.trim() !== '') {
            addItem(inputItem);
            setInputItem('');
            inputRef.current.focus();
        } else {
            setIsDelete(()=> {
                return false;
            })
    
            setModal(()=> {
                return true;
            })
           
        }
    }

    const handleDeleteAllClick = () => {
       
        setIsDelete(()=> {
            return true;
        })

        setModal(()=> {
            return true;
        })
    }



    return (
        <div className="shoppinglist-input-wrapper">

            <div>
                <input className="input-field" value={inputItem} ref={inputRef} onChange={e => setInputItem(e.target.value)} valuetype="text" />
                <button className="add" onClick={handleAddClick}>Lägg till</button>
            </div>
            <button className="delete-all" onClick={handleDeleteAllClick}>Ta bort alla</button>
            {modal ? isDelete ? <Modal isDelete={true} text='Vill du verkligen ta bort alla?' setModal={setModal} deleteAllItems={deleteAllItems} /> : <Modal isDelete={false} text='Du behöver skriva något för att lägga till.' setModal={setModal} deleteAllItems={deleteAllItems}/> : ''}
        </div>
    )
}

export default Input
