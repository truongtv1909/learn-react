import * as types from '../constants/typeAction';
// console.log(types.SORT);
export const status = ()=>{
    return {
        type:types.CHANGE_STATUS
    }
}
export const sort = (sort)=>{
    return{
        type:types.SORT,
        sort:sort
    }
}