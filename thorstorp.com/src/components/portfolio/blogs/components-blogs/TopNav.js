import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import {Link } from 'react-router-dom'


const TopNav = () => {

    const { isLightTheme, dark, light} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (
        <div>
            <Link style={{textDecoration: 'none'}} to="/portfolio/blogs">
            <div style={{background: theme.bg }} className="blogs-topnav-wrapper">

                <i style={{color: theme.text }}className="far fa-3x fa-comment-dots"></i>


                <h1 style={{color: theme.text }}>Blogs</h1>
                <p style={{color: theme.text }}>By Max Thorstorp</p>
            </div>
            </Link>

        </div>
    )
}

export default TopNav
