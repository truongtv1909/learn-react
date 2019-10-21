import { createStore, } from 'redux';
import { changeStatus, sort} from './actions/action';
import myReducer from './reducer/index';


const store = createStore(myReducer);

console.log('Default: ', store.getState());


store.dispatch(changeStatus());

console.log('action1: ', store.getState());

store.dispatch(sort({
    by:'Age',
    value: -1
}));

console.log('action2: ', store.getState());