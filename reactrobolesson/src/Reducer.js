import {
     CHANGE_SEARCH_FIELD,
     FETCH_ROBOT_PENDING,
     FETCH_ROBOT_SUCCESS,
     FETCH_ROBOT_FAILED
 } from "./Constant";
const initialState = {
    searchField: ''
}
const fetchingRobotState = {
    isPending: false,
    robots: [],
    error: ''
}

export const robotSearched = (state=initialState, action={})=> {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
            default: 
            return state;
    }
}
export const fetchedRobot=(state= fetchingRobotState, action={})=> {
    switch(action.type) {
        case FETCH_ROBOT_PENDING:
            return Object.assign({}, state, {isPending: true})
        case FETCH_ROBOT_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false})  
        case FETCH_ROBOT_FAILED:
            return {...state, error: action.payload, isPending: false}   
            default: 
            return state;
    }
}