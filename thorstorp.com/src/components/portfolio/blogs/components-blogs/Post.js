import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import './post.css'
import { Link } from 'react-router-dom'

const Post = ({post}) => {

    const { isLightTheme, dark, light } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    

    return (
<Link style={{textDecoration: 'none'}} to={`/portfolio/blogs/view/${post.id}`}>
        <div style={isLightTheme ? {background: '#cecece'} : {background: '#312a2a'}} className="post-wrapper">
            <h3 className="blogs-font" style={{color: theme.text }}>{post.title.slice(0, 30)}...</h3>
            <p className="blogs-font" style={{color: theme.text }}>{post.body.slice(0,100)}...</p>
            <h6 className="blogs-font" style={{color: theme.text }}>Author: {post.userId}</h6>
        </div>
        </Link>
    )
}

export default Post
