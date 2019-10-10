import * as types from '../constants/typeActions';

let initState = false;

let myReducer = (state = initState, action)=>{
    if(action.type === types.CHANGE_STATUS){
        return state = !state
    }
    return state;
}
export default myReducer;