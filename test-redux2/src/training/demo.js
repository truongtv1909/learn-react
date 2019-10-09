import {createStore} from 'redux';
import {status, sort} from './actions/action';
import myReducer from './reducer/index';

const store = createStore(myReducer);
console.log('default: ',store.getState());
store.dispatch(status());
console.log('change status: ', store.getState());
store.dispatch(sort({
    by:'job',
    value:-2
}));
console.log('sort: ', store.getState());