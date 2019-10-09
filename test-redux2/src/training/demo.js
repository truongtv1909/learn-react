import {createStore} from 'redux';

let initState = {
    status: false,
    sort:{
        by:'name',
        value: 1
    }
};
let myReducer =(state= initState,action)=>{
    if(action.type ==='CHANGE_STATUS'){
        return {
            ...state,status:!state.status
        }
    }
    if(action.type === 'SORT'){
        return {
            ...state,sort:{
                ...state.sort,
                by:action.sort.by,
                value:action.sort.value
            }
        }
    }
    return state;
}

const store = createStore(myReducer);

console.log('default: ',store.getState());

let ac1 = {
    type:'CHANGE_STATUS'
}

let ac2 = {
    type:'SORT',
    sort:{
        by:'age',
        value:-1
    }
}

store.dispatch(ac1);

console.log('change status: ', store.getState());

store.dispatch(ac2);

console.log('sort: ', store.getState());