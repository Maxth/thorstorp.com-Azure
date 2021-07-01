import React from 'react'
import './changeItem.css'
import { useState } from 'react'

const ChangeItem = ({ setToggleChange, changeItemCallback, id }) => {

    const [newText, setNewText] = useState('');

    const toggleChange = () => {
        setToggleChange((prev) => {
            return !prev
        })
    }

    const changeCheck = () => {
        changeItemCallback(id, newText);
        setToggleChange((prev)=>!prev)
    }
    return (
        <div className="change-wrapper">
            <input className="change-input" type="text" value={newText} onChange={e => setNewText(e.target.value)}  autoFocus />
            <i onClick={changeCheck} className="fas fa-2x fa-check change-check"></i>
            <i onClick={toggleChange} className="fas fa-2x fa-times change-regret"></i>
        </div>
    )
}

export default ChangeItem
