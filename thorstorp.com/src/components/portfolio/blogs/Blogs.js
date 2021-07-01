import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import TopNav from './components-blogs/TopNav';
import Background from './views-blogs/Background';
import Background2 from './views-blogs/Background2';
import CreateForm from './views-blogs/CreateForm';
import ViewForm from './views-blogs/ViewForm';
import ViewPost from './views-blogs/ViewPost';
import NotFound from './views-blogs/NotFound';
import { useEffect, useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { PostsContext } from './context/PostsContext';
import actiontypes from './components-blogs/reducers/actiontypes';
import axios from 'axios';
import './blogs.css'


const Blogs = ({setIsViewing}) => {

    const {dispatch} = useContext(PostsContext);
    
    const test = async ()=> {
  
  
      let _posts = []
        try {
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  
          _posts = res.data
          dispatch({type: actiontypes().posts.setPosts, payload: _posts})
         
        } catch (err) {
          console.log(err)
          // dispatch({type: actiontypes().posts.setPosts, [] } )
        }
    }
    

    
  useEffect(()=>{
    const _html = document.querySelector('html');
    test();
    _html.style.backgroundColor = "#312a2a";
  
    return ()=> {
        setIsViewing(false)
        _html.style.backgroundColor = "white"}
    
  
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
    const { isLightTheme, dark, light, toggleTheme } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    const handleThemeClick = () => {


        const root = document.querySelector(':root');
        isLightTheme ? root.style.setProperty('--c', 'white') : root.style.setProperty('--c', 'black');

        const _html = document.querySelector('html');
        
        _html.style.backgroundColor = `${isLightTheme ? '#312a2a' : '#cecece'}`;
        toggleTheme();
    }




    return (
        <div>
            
                
                    <Router>

                        <TopNav />
                        <button style={{ color: theme.text, background: theme.bg }} onClick={handleThemeClick} className="theme-button">Set {isLightTheme ? 'dark' : 'light'} theme</button>
                        <Switch>

                            <Route exact path="/portfolio/blogs">
                                <div className="blogs-background-wrapper">
                                    <NavLink to="/portfolio/blogs/create"><Background2 /></NavLink>
                                    <NavLink to="/portfolio/blogs/view"><Background /></NavLink>
                                </div>
                            </Route>

                            <Route exact path="/portfolio/blogs/create">
                                <CreateForm />
                            </Route>
                            <Route exact path="/portfolio/blogs/view">

                                <ViewForm />

                            </Route>

                            <Route exact path="/portfolio/blogs/view/:id">
                                <ViewPost />
                            </Route>
                            <Route exact path="*">
                                <NotFound />
                            </Route>

                        </Switch>


                    </Router>
                
           
        </div>
    )
}

export default Blogs
