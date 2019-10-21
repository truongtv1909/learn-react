import * as types from '../constants/const';
import {combineReducers} from 'redux';
import sort from './sort';
import status from './status';
// let initState = {
//     status: true,
//     sort: {
//         by: 'name',
//         value: 1
//     }
// }

// export default function myReducer(state = initState, action) {
//     if (action.type === types.CHANGE_STATUS) {
//         return {
//             ...state, status: !state.status
//         }
//     }
//     if (action.type === types.SORT) {
//         return {
//             ...state,
//             sort: {
//                 ...state.sort,
//                 by: action.sort.by,
//                 value: action.sort.value
//             }
//         }
//     }
//     return state;
// }

let myReducer = combineReducers({
    sort,
    status
});

export default myReducer;