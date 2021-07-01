import React from 'react'
import './shoppingItem.css'
import Modal from '../Input/Modal'
import ChangeItem from './ChangeItem'
import { useState } from 'react'

const ShoppingItem = ({ item, deleteItemCallback, checkItemCallback, changeItemCallback }) => {

    const [modal, setModal] = useState(false);
    const [isCompleted, setIsCompleted] = useState(item.completed);
    const [toggleChange, setToggleChange] = useState(false);

    const deleteItem = () => {
        if (item.completed === true)
            deleteItemCallback(item.id);
        else
            setModal(() => {
                return true;
            })
    }

    const checkItem = () => {
        setIsCompleted(() => {
            return true;
        })
        item.completed = true;
        checkItemCallback(item.id);
    }

    const changeItem = () => {
        setToggleChange((prev) => {
            return !prev;
        })
    }

    const regretCheck = () => {
        item.completed = false;
        setIsCompleted(() => {
            return false;
        })
    }

    return (
        <div className="item-wrapper">
            {toggleChange ? 
            <ChangeItem id={item.id} setToggleChange={setToggleChange} changeItemCallback={changeItemCallback} /> : 
            <p className={`item-text ${isCompleted ? 'text-completed' : ''}`} >{item.body}</p>}
            {toggleChange ? '' : 
            <div className="options">
                {isCompleted ? 
                <p onClick={regretCheck} className="regret-text">ÅNGRA</p> : 
                <div onClick={checkItem} className={`single-option ${isCompleted ? 'invisible' : ''}`}>
                    <i className="fas fa-5x fa-check-circle check"></i>
                    <small>Klar!</small>
                </div>}
                <div onClick={changeItem} className="single-option">
                    <i className="fas fa-5x fa-redo-alt redo"></i>
                    <small>Ändra!</small>
                </div>
                <div onClick={deleteItem} className="single-option">
                    <i className="far fa-5x fa-trash-alt trash"></i>
                    <small>Släng!</small>
                </div>
            </div>}
            {modal ? <Modal text='Du behöver klarmarkera innan du slänger.' isDelete={false} setModal={setModal} /> : ''}
        </div>
    )
}

export default ShoppingItem
