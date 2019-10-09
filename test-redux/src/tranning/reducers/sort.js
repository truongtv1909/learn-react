// let initState={
//         by:'name',
//         value: 1
// }
// let myReducer = function(state=initState,action) {
//     if(action.type ==='SORT'){
//         return {
//             ...state,by:action.sort.by,value:action.sort.value
//         }
//     }
//     return state;
// }
// export default myReducer;

let initState = {
    by:'name',
    value: 1
}

let myReducer = (state=initState, action)=>{
    if(action.type === 'SORT'){
        return {
            ...state,by:action.sort.by, value:action.sort.value
        }
    }
    return state
}

export default myReducer;