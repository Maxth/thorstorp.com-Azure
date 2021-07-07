import { createStore, applyMiddleware, compose } from "redux";
import userReducer from "./reducers/adminPage-userReducer";
import thunk from 'redux-thunk'

export const store = createStore(userReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )


