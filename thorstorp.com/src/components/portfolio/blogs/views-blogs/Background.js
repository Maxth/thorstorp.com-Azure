import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { NavLink } from 'react-router-dom'

const Background = () => {

    const { isLightTheme, dark, light } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (
        <div className="justify-vertical">
            <NavLink style={{color: theme.text }} to="/portfolio/blogs/view"><h2 className="blogs-navlink">View Articles</h2></NavLink>
            
            <div className="blogs-background">

            </div>
            </div>
    )
}

export default Background
