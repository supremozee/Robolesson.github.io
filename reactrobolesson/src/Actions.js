import {
    CHANGE_SEARCH_FIELD,
    FETCH_ROBOT_PENDING,
    FETCH_ROBOT_SUCCESS,
    FETCH_ROBOT_FAILED
   } from "./Constant";

export const searchingRobot = (text)=> {
   console.log(text)
   return  {
      type: CHANGE_SEARCH_FIELD,
      payload: text
   }
}

export const fetchingRobot = ()=> (dispatch)=> {
   dispatch({type: FETCH_ROBOT_PENDING})
   fetch(`https://jsonplaceholder.typicode.com/users`)
   .then(resp=> resp.json())
   .then(data=> dispatch({type: FETCH_ROBOT_SUCCESS, payload: data}))
   .catch(error=> dispatch({type: FETCH_ROBOT_FAILED, payload: error}))
}

