import { createStore, applyMiddleware, combineReducers } from "redux";

import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from "redux-thunk";

import token from './reducers/token_reducer'

const allReducer = combineReducers({
    token
})
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))