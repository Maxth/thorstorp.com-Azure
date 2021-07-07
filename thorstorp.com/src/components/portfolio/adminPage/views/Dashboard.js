import React, {useEffect} from 'react'
import './dashboard.css'
import { useSelector, useDispatch } from 'react-redux'
import Form from '../components/Form'

import User from '../components/User'
import { Link } from 'react-router-dom'
import { getAll } from '../../../../store/actions/adminPage-userActions'

const Dashboard = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch])
    

    return (
        <div className="admin-page dashboard-container">
            <div className="admin-page header-wrapper">
                <h1>User Management</h1>
                <p>Add a user or click one in the list to modify or delete it. Changes are permanent.</p>
            </div>
            <div className="admin-page dashboard-wrapper">
                <Form />

                <table className="admin-page dashboard-table">
                <tbody>
                    <tr>
                       <th className="admin-page table-header">First name</th>
                       <th className="admin-page table-header">Last name</th>
                       <th className="admin-page table-header">Email</th>
                    </tr>
                    {!!users.length && users.map(user=> <User key= {user._id} _id= {user._id} firstName= {user.firstName} lastName={user.lastName} email={user.email}/>)}
                    </tbody>
                </table>
            </div>
            <Link to="/portfolio/admin-page/" style={{textDecoration: 'none'}}><button className="admin-page logout-btn">Log out</button></Link>
        </div>
    )
}

export default Dashboard
