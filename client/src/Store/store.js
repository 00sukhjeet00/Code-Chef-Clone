import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { userReducer } from "./Reducer/user";
import thunk from 'redux-thunk'
const reducer=combineReducers({
    user:userReducer
})
export const store=createStore(reducer,applyMiddleware(thunk))