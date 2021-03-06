import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './viewPost.css'
import { PostsContext } from '../context/PostsContext';
import actiontypes from '../components-blogs/reducers/actiontypes';


const ViewPost = () => {

    const {dispatch, state} = useContext(PostsContext)
    const { isLightTheme, dark, light } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    
    
    const { id } = useParams();

    
    
    useEffect(()=> {
        dispatch({type: actiontypes().posts.getPost, payload: id})    
                
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 
    


    return (
        <div className="blabla-wrapper">
            {state.post ? 
            <div className="blogs-font viewpost-wrapper" style={isLightTheme ? {background: 'white'} : {background: 'black'}}>
            <h2 className="blogs-font" style={isLightTheme ? {color: 'black'} : {color: 'white'}}>{state.post.title}</h2>
            <br />
            <p className="blogs-font" style={isLightTheme ? {color: 'black'} : {color: 'white'}}>{state.post.body}</p>
            <br /><br />
            <h5 className="blogs-font" style={isLightTheme ? {color: 'black'} : {color: 'white'}}>Written by: {state.post.userId}</h5>

        </div>    
        : 'Im sorry, I cant seem to find this post'
        }
            
            <div className="blogs-links">
                <Link className="blogs-font" style={{color: theme.text }} to="/portfolio/blogs/view">Go back to the list of blogs..</Link>
                <Link className="blogs-font" style={{color: theme.text }} to="/portfolio/blogs/create">Go back to write something..</Link>

            </div>
        </div>
    )
}

export default ViewPost
