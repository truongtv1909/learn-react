import * as types from '../constants/const';

let initState = false;

export default function myReducer(state = initState, action) {
    if (action.type === types.CHANGE_STATUS) {
        return !state
        
    }
    
    return state;
}
