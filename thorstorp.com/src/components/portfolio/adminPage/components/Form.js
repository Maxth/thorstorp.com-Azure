import React, { useState, useEffect } from 'react'
import './form.css'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, change, setUserIsclicked } from '../../../../store/actions/adminPage-userActions';
import Modal from './Modal';

const Form = () => {

    const dispatch = useDispatch();
    const [isDelete, setIsDelete] = useState(false);
    const [isInvalid, setisInvalid] = useState(false);
    const [isDuplicate, setIsDuplicate] = useState(false);
    const isUserClicked = useSelector(state => state.isUserClicked);
    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })
    const user = useSelector(state => state.user);
    const users = useSelector(state => state.users)

    const handleSub = (e) => {
        e.preventDefault();


        if (inputs.firstName.trim() === '' || inputs.lastName.trim() === '' || inputs.email.trim() === '')
            setisInvalid(true)
        else if (users.find(x => x.email.toLowerCase() === inputs.email.toLowerCase()))
            setIsDuplicate(true)
        else {
            dispatch(addUser(inputs));
            setisInvalid(false);
            setIsDuplicate(false);
            setInputs({
                firstName: '',
                lastName: '',
                email: ''
            })
        }



    }

    const handleChange = () => {
        if (inputs.firstName.trim() === '' || inputs.lastName.trim() === '' || inputs.email.trim() === '')
            setisInvalid(true)
            else {
        dispatch(change({
            id: user.id.id,
            firstName: inputs.firstName,
            lastName: inputs.lastName,
            email: inputs.email
        }))
        setisInvalid(false);
        dispatch(setUserIsclicked(false));

    }
    }

    const handleDelete = ()=> {
        setIsDelete(true);
    }

    const handleReset = () => {
        setInputs( {
            firstName: user.firstName.firstName,
            lastName: user.lastName.lastName,
            email: user.email.email
        })
    }

    useEffect(()=>{
        if (isUserClicked) {
            setInputs( {
                id: user.id.id,
                firstName: user.firstName.firstName,
                lastName: user.lastName.lastName,
                email: user.email.email
            })
        }
        else {
        setInputs({
            firstName:'',
            lastName: '',
            email: ''
        })
    }

    }, [isUserClicked, user])



    return (
        <div className="admin-page form-container">
            {isDelete ? <Modal setIsDelete= {setIsDelete}/> : ''}
            <form onSubmit={handleSub} className="admin-page form">

                <label htmlFor="firstName">First name:</label>
                <input value={inputs.firstName} onChange={e => setInputs({ ...inputs, firstName: e.target.value })} className="admin-page user-input" id="firstName" type="text" />
                <label htmlFor="lastName">Last name:</label>
                <input value={inputs.lastName} onChange={e => setInputs({ ...inputs, lastName: e.target.value })} className="admin-page user-input" id="lastName" type="text" />
                <label htmlFor="email">Email:</label>
                <input value={inputs.email} onChange={e => setInputs({ ...inputs, email: e.target.value })} className="admin-page user-input" id="email" type="email" />




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
