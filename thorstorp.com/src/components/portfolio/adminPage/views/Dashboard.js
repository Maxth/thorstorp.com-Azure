import React from 'react'
import './dashboard.css'
import { useSelector } from 'react-redux'

const Dashboard = () => {

const users = useSelector(state => state);


    return (
        <div>
            {
                users.map(user => 
                    <div> 
                   <p> {user.firstName} </p>
                   <p> {user.lastName} </p>
                   <p> {user.email} </p>
                   </div>
                )
            }
        </div>
    )
}

export default Dashboard
