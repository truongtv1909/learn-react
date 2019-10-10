import {combineReducers} from 'redux';
import status from './status';
import sort from './sort';

let myReducer = combineReducers({
    status,
    sort
});
export default myReducer;
