import {
    CHANGE_SEARCH_FIELD,  
    REQUESR_ROBOTS_PENDING,
    REQUESR_ROBOTS_SUCCESS,
    REQUESR_ROBOTS_FAILED} from './constants.js';


const initialStateSearch={
    searchField: ''
}

export const searchRobots=(state=initialStateSearch, action={} ) =>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField:action.payload})
        default:
            return state 
    }
}

const initialStateRobot={
    isPending: false,
    robots:[],
    error:''
}

export const requestRobots=(state=initialStateRobot, action={}) =>{
    switch(action.type){
        case REQUESR_ROBOTS_PENDING:
            return Object.assign({},state,{isPending:true})
        case REQUESR_ROBOTS_SUCCESS:
            return Object.assign({},state,{isPending:false, robots:action.payload})
        case REQUESR_ROBOTS_FAILED:
            return Object.assign({},state,{isPending:false, error:action.payload})
        default:
            return state;
    }
}