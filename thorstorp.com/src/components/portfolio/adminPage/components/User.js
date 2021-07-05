import React from 'react'
import { useDispatch } from 'react-redux';
import { set } from '../../../../store/actions/adminPage-userActions';
import '../views/dashboard.css'

const User = ({ firstName, lastName, email, id }) => {

    const dispatch = useDispatch();

    const handleUserClick = () => {
        dispatch(set(
            {
                id: {id},
                firstName: {firstName},
                lastName: {lastName},
                email: {email}
            }))

    }

    return (
        <tr className="admin-page table-row" onClick={handleUserClick}>
            <td className="admin-page table-data">{firstName}</td>
            <td className="admin-page table-data">{lastName}</td>
            <td className="admin-page table-data">{email}</td>
        </tr>
    )
}

export default User