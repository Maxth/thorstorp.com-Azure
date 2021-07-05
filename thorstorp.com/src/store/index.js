import { createStore } from "redux";
import userReducer from "./reducers/adminPage-userReducer";

export const store = createStore(userReducer);


