import React from 'react'
import { useDispatch } from 'react-redux';
import { set } from '../../../../store/actions/adminPage-userActions';
import '../views/dashboard.css'

const User = (props) => {

    const dispatch = useDispatch();

    const handleUserClick = () => {
        dispatch(set({ props }))
    }

    return (
        <tr className="admin-page table-row" onClick={handleUserClick}>
            <td className="admin-page table-data">{props.firstName}</td>
            <td className="admin-page table-data">{props.lastName}</td>
            <td className="admin-page table-data">{props.email}</td>
        </tr>
    )
}

export default User