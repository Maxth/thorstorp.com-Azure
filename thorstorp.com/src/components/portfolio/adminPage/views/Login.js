import React, {useState} from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isInvalid, setisInvalid] = useState(false)

    const admins = {
        Username: 'admin',
        Password: 'password'
    }

    const handleLoginClick = (e) => {
        
        if (username !== admins.Username || password !== admins.Password) {
           e.preventDefault();
           setisInvalid(true);
           setPassword('');
           setUsername('');
        }

    }

    return (
        <div className="admin-page login-wrapper">
            <small id="admin-page-usernote">Username: "admin"</small>
            <small id="admin-page-passwordnote">Password: "password"</small>
            <div className="admin-page inputs-wrapper">
                <div className="admin-page input-wrapper">
                    <label className="admin-page login-labels" htmlFor="admin-page-username">Username:</label>
                    <input value={username} onChange={e => setUsername(e.target.value)} id="admin-page-username" className="admin-page login-input" type="text" placeholder="Enter username" />
                </div>
                <div className="admin-page input-wrapper">
                    <label className="admin-page login-labels" htmlFor="admin-page-password">Password:</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} id="admin-page-password" className="admin-page login-input" type="password" placeholder="Enter password" />
                </div>
                <Link style={{textDecoration: 'none'}} to="/portfolio/admin-page/dashboard"><button onClick={handleLoginClick} className="admin-page input-wrapper btn">Login</button></Link>
                {isInvalid ? <small style={{color: 'red'}}>Incorrect credentials</small> : ''}
            </div>
        </div>
    )
}

export default Login
