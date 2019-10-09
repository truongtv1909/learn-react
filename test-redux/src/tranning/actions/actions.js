import * as types from '../constants/type';
// export const status = () =>{
//     return {
//         type:types.CHANGE_STATUS
//     }
// }

// export const sort = (sort)=>{
//     return {
//         type:types.SORT,
//         sort:sort
//     }
// }

export const status = () => ({
    type:types.CHANGE_STATUS
});

export const sort = (sort) => ({
    type:types.SORT,
    sort:sort
})