import actiontypes from './actiontypes';



export const postsReducer = (state, action) => {
  switch (action.type) {
    // case 'ADD_POST':

    case actiontypes().posts.setPosts:
      // let _posts = []
      // try {
      //   const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

      //   _posts = res.data
      //   return _posts 
      // } catch (err) {
      //   console.log(err)
      //   return  []
      // }
      return {...state, posts: action.payload} 
      


    case actiontypes().posts.addPost:
      const post = {
        id: Date.now().toString(),
        title: action.payload.title,
        body: action.payload.body,
        userId: action.payload.userId
      }
      const newPosts = [post, ...state.posts]


      return {...state, posts: newPosts}
    

    case actiontypes().posts.getPost:
      // console.log(state.find(x=> x.id.toString() === action.payload.toString()))
      const foundPost = state.posts.find(x=> x.id.toString() === action.payload.toString())



      return {...state, post: foundPost}

    case actiontypes().posts.deletePost:
      return state.filter(post => post.id !== action.id)

    default:
      return state
  }
}