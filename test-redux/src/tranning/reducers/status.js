// let initState= false;
// let myReducer = function myReducer(state=initState,action) {
//     if(action.type ==='CHANGE_STATUS'){
//             state=!state
//     }
//     return state;
// }
// export default myReducer;

let initState = false;

let myReducer = (state = initState, action)=>{
    if(action.type === 'CHANGE_STATUS'){
        return state = !state
    }
    return state;
}
export default myReducer;
