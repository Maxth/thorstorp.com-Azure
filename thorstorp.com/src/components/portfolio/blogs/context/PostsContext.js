import { createContext, useReducer } from 'react'
import { postsReducer } from '../components-blogs/reducers/postsreducer';



export const PostsContext = createContext();



const PostsContextProvider = (props) => {


           
  

        const [state, dispatch] = useReducer(postsReducer, {posts: [], post: null})
      
     


        return (
            // <PostsContext.Provider value={{posts, addPost, deletePost}}>
            <PostsContext.Provider value={{state, dispatch}}>
                {props.children}
            </PostsContext.Provider>
        )
    }

export default PostsContextProvider


