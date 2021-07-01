import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { NavLink } from 'react-router-dom'

const Background2 = () => {

    const { isLightTheme, dark, light } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (
        <div className="justify-vertical">
            
            <NavLink style={{color: theme.text }}  to="/portfolio/blogs/create"><h2 className="blogs-navlink">Create Article</h2></NavLink>
            <div className="blogs-background2">

            </div>
        </div>
    )
}

export default Background2
