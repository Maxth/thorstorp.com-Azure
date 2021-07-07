import React, { useState, useEffect } from 'react'
import './form.css'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, changeUser, setUserIsclicked } from '../../../../store/actions/adminPage-userActions';
import Modal from './Modal';

const Form = () => {

    const dispatch = useDispatch();
    const [isDelete, setIsDelete] = useState(false);
    const [isInvalid, setisInvalid] = useState(false);
    const [isDuplicate, setIsDuplicate] = useState(false);
    const isUserClicked = useSelector(state => state.isUserClicked);
    const [inputFirstName, setInputFirstName] = useState('')
    const [inputLastName, setInputLastName] = useState('')
    const [inputEmail, setInputEmail] = useState('')

    const user = useSelector(state => state.user);
    const users = useSelector(state => state.users)

    const handleSub = (e) => {
        e.preventDefault();


        if (inputFirstName.trim() === '' || inputLastName.trim() === '' || inputEmail.trim() === '')
            setisInvalid(true)
        else if (users.find(x => x.email.toLowerCase().trim() === inputEmail.toLowerCase().trim()))
            setIsDuplicate(true)
        else {
            dispatch(addUser({
                firstName: inputFirstName,
                lastName: inputLastName,
                email: inputEmail
            }));
            setisInvalid(false);
            setIsDuplicate(false);
            setInputFirstName('');
            setInputLastName('');
            setInputEmail('');
        }



    }

    const handleChange = () => {
        if (inputFirstName.trim() === '' || inputLastName.trim() === '' || inputEmail.trim() === '')
            setisInvalid(true)
            else {
        dispatch(changeUser({
            _id: user._id,
            firstName: inputFirstName,
            lastName: inputLastName,
            email: inputEmail
        }))
        setisInvalid(false);
        dispatch(setUserIsclicked(false));

    }
    }

    const handleDelete = ()=> {
        setIsDelete(true);
    }

    const handleReset = () => {
        setInputFirstName(user.firstName);
        setInputLastName(user.lastName);
        setInputEmail(user.email);

            
    }

    useEffect(()=>{
        if (isUserClicked) {
            setInputFirstName(user.firstName)
            setInputLastName(user.lastName)
            setInputEmail(user.email)
        }
        else {
            setInputFirstName('');
            setInputLastName('');
            setInputEmail('');
    }

    }, [isUserClicked, user])



    return (
        <div className="admin-page form-container">
            {isDelete ? <Modal setIsDelete= {setIsDelete}/> : ''}
            <form onSubmit={handleSub} className="admin-page form">

                <label htmlFor="firstName">First name:</label>
                <input value={inputFirstName} onChange={e => setInputFirstName(e.target.value)} className="admin-page user-input" id="firstName" type="text" />
                <label htmlFor="lastName">Last name:</label>
                <input value={inputLastName} onChange={e => setInputLastName(e.target.value)} className="admin-page user-input" id="lastName" type="text" />
                <label htmlFor="email">Email:</label>
                <input value={inputEmail} onChange={e => setInputEmail(e.target.value)} className="admin-page user-input" id="email" type="email" />




                {isUserClicked
                    ? <div className="admin-page user-btns"><button type="button" onClick={handleChange} className="admin-page change-btn">Update user</button><button type="button" onClick={handleDelete} className="admin-page delete-btn">Delete user</button></div>
                    : <button className="admin-page add-user-btn">Add user</button>
                }
                {isUserClicked ? <p onClick={handleReset} className="admin-page reset">Reset</p> : ''}
                {isInvalid 
                ? <small className="admin-page invalid-text">No field can be left blank.</small> 
                : isDuplicate 
                    ? <small className="admin-page invalid-text">Email is already registered.</small>
                    : ''}
            </form>
        </div>
    )
}

export default Form
