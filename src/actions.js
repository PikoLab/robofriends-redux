import {
    CHANGE_SEARCH_FIELD,  
    REQUESR_ROBOTS_PENDING,
    REQUESR_ROBOTS_SUCCESS,
    REQUESR_ROBOTS_FAILED} from './constants.js';

export const setSearchField=(text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

export const requestRobots=()=> (dispatch)=>{
    dispatch({type:REQUESR_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type:REQUESR_ROBOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({type:REQUESR_ROBOTS_FAILED, payload: error}))
}