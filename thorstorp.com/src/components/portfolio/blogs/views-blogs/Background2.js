import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

const Background2 = () => {

    const { isLightTheme, dark, light } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (
        <div className="justify-vertical">

            <Link style={{ color: theme.text, textDecoration: 'none' }} to="/portfolio/blogs/create">
                <h2 className="blogs-navlink">Create Article</h2>
            </Link>
            <Link style={{ color: theme.text, textDecoration: 'none' }} to="/portfolio/blogs/create"> 
            <div className="blogs-background2">
            </div>
            </Link>
        </div>
    )
}

export default Background2
