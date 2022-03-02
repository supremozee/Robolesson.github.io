import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { createLogger } from 'redux-logger';
import  ThunkMiddleware from 'redux-thunk';
import 'tachyons'
import reportWebVitals from './reportWebVitals';
import { robotSearched, fetchedRobot} from './Reducer';
const rootReducer = combineReducers({robotSearched, fetchedRobot})
const logger = createLogger()
const Store = createStore(rootReducer, applyMiddleware(logger, ThunkMiddleware))
ReactDOM.render(
    <Provider store = {Store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
