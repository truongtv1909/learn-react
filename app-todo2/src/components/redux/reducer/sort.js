import * as types from '../constants/const';

let initState = {
        by: 'name',
        value: 1
}

export default function myReducer(state = initState, action) {
    // console.log(action);
    if (action.type === types.SORT) {
        return {
            ...state,
                by: action.sort.by,
                value: action.sort.value
            
        }
    }
    return state;
}
