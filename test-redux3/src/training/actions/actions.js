import * as types from '../constants/typeActions';
export const status = ()=>{
    return {
        type: types.CHANGE_STATUS
    }
}

export const sort = (sort)=>{
    return {
        type: types.SORT,
        sort: sort
    }
}