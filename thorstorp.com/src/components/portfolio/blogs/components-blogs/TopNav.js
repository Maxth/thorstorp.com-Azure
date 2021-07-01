import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { NavLink } from 'react-router-dom'


const TopNav = () => {

    const { isLightTheme, dark, light} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (
        <div>
            <NavLink to="/portfolio/blogs">
            <div style={{background: theme.bg }} className="topnav-wrapper">

                <i style={{color: theme.text }}className="far fa-comment-dots"></i>


                <h4 style={{color: theme.text }}>Blogs</h4>
                <p style={{color: theme.text }}>By Max Thorstorp</p>
            </div>
            </NavLink>

        </div>
    )
}

export default TopNav
