import * as types from '../constants/const';

export const changeStatus = ()=>{
    return {
        type:types.CHANGE_STATUS
    }
}
    
export const sort=(sort)=>{
    return {
        type:types.SORT,
        sort: sort
    }
}
