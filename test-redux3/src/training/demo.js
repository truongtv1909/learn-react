import {createStore} from 'redux';
import myReducer from './reducer/index';
import {status, sort} from './actions/actions';

let store = createStore(myReducer);

console.log(store.getState());

store.dispatch(status());

console.log('change status: ', store.getState());

store.dispatch(sort({
    by:'JOB',
    value: 2
}))

console.log('sort: ',store.getState());
