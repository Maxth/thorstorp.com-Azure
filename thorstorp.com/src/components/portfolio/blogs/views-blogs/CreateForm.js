import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import './createForm.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import actiontypes from '../components-blogs/reducers/actiontypes';
import { PostsContext } from '../context/PostsContext';


const CreateForm = ({ setPosts }) => {

    const { dispatch } = useContext(PostsContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const { isLightTheme, dark, light } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    const handleClear = () => {
        setTitle(() => '')
        setContent(() => '')
        setAuthor(() => '')
        const smallError = document.querySelectorAll('.error');
        smallError.forEach(element => {

            element.classList.add('hidden');

        });
    }

    const validateForm = (e) => {
        e.preventDefault();
        const validated = [false, false, false]
        for (let i = 0; i < 3; i++) {

            if (e.target[i].value.trim() === '') {
                e.target[i].nextElementSibling.classList.remove('hidden')
                validated[i] = false;
            }
            else {
                e.target[i].nextElementSibling.classList.add('hidden')
                validated[i] = true;
            }

        }


        if (validated.every((value) => value === true)) {


            dispatch({
                type: actiontypes().posts.addPost, payload: {
                    "userId": e.target[2].value,
                    "body": e.target[1].value,
                    "title": e.target[0].value
                }
            })
            setTitle(() => '')
            setContent(() => '')
            setAuthor(() => '')
        }
    }



    return (
        <div className="create-form-wrapper">
            <form style={isLightTheme ? { background: '#cecece' } : { background: '#312a2a' }} className="blogs-form" onSubmit={validateForm}>

                <input style={isLightTheme ? { background: 'white', color: 'black' } : { background: 'black', color: 'white' }} className="blogs-input" value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter a title.." id="title" />
                <small className="blogs-error blogs-hidden">You must have a title..</small>

                <textarea style={isLightTheme ? { background: 'white', color: 'black' } : { background: 'black', color: 'white' }} className="blogs-input" value={content} onChange={e => setContent(e.target.value)} placeholder="Write something.." name="content" id="content" rows="10"></textarea>
                <small className="blogs-error blogs-hidden">Content cannot be empty..</small>

                <input style={isLightTheme ? { background: 'white', color: 'black' } : { background: 'black', color: 'white' }} className="blogs-input" value={author} onChange={e => setAuthor(e.target.value)} type="text" placeholder="Author?" id="author" />
                <small className="blogs-error blogs-hidden" >You must enter an author name..</small>

                <div className="justify-horizontal">
                    <button className="blogs-btn" type="submit">Post</button>
                    <small onClick={handleClear} className="blogs-clear">Clear</small>
                </div>
                <NavLink style={{ color: theme.text }} id="view-link" to="/portfolio/blogs/view">Go to posts..</NavLink>
            </form>

        </div>
    )
}

export default CreateForm
