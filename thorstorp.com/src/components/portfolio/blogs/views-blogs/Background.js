import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

const Background = () => {

    const { isLightTheme, dark, light } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (
        <div className="justify-vertical">
            <Link style={{ color: theme.text, textDecoration: 'none' }} to="/portfolio/blogs/view"><h2 className="blogs-navlink">View Articles</h2></Link>

            <Link style={{ color: theme.text, textDecoration: 'none' }} to="/portfolio/blogs/view"> 
            <div className="blogs-background">
            </div>
            </Link>
        </div>
    )
}

export default Background
