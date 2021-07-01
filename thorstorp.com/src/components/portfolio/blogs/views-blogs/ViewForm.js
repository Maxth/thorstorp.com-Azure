import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import './viewForm.css'
import Post from '../components-blogs/Post'
import { PostsContext } from '../context/PostsContext';


const ViewForm = () => {


    const { isLightTheme } = useContext(ThemeContext)
    const { state } = useContext(PostsContext);




    return (
        <div className="view-wrapper">
            <div style={isLightTheme ? { background: '#312a2a' } : { background: '#cecece' }} className="posts-list">
                {
                state.posts.length ?
                    state.posts.map(post => (
                        <Post key={post.id} post={post} />
                    )) : 'No posts found'
                }
            </div>
        </div>
    )
}

export default ViewForm
