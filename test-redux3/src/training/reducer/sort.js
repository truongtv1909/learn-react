import * as types from '../constants/typeActions';

let initState = {
    by:'age',
    value:-1
}

let myReducer = (state = initState, action)=>{
    if(action.type === types.SORT){
        return {
            ...state,
            by: action.sort.by,
            value: action.sort.value
        }
    }
    return state;
}
export default myReducer;