import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import axios from 'axios';

const reducer; 

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
export default store;