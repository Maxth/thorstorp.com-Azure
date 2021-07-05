import React from 'react'
import './modal.css'
import { useDispatch, useSelector} from 'react-redux'
import { deleteUser, setUserIsclicked } from '../../../../store/actions/adminPage-userActions';

const Modal = ({setIsDelete}) => {
    const dispatch = useDispatch();
    const userToDelete = useSelector(state => state.user)


    const handleRegret = () => {
        setIsDelete(false);

    }
    

    const handleYes = () => {
        dispatch(deleteUser(userToDelete));
        // dispatch(set({
        //     id: '',
        //     firstName: '',
        //     lastName: '',
        //     email: ''
        // }))
        setIsDelete(false);
        dispatch(setUserIsclicked(false))
    }

    return (
        <div className="admin-page modal-wrapper">
            <div className="admin-page modal-box">
                <h2>Are you sure you want to delete this user?</h2>
                <div className="admin-page modal-btn-container"><button onClick = {handleRegret} className="admin-page modal-regret">Regret</button><button onClick={handleYes} className="admin-page modal-yes">Yes</button></div>
                
            </div>
        </div>
    )
}

export default Modal
