let initState = {
        by:'name',
        value: 1
};

let myReducer = (state=initState, action) =>{
    if(action.type==='SORT_DECRE'){
        return{
            ...state,value: action.sort.value
        }
    }
    return state;
}

export default myReducer;