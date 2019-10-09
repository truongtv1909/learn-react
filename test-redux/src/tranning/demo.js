import {createStore} from 'redux';
import {status,sort} from './actions/actions';
import * as actions from './actions/actions';
import myReducer from './reducers/index';

const store = createStore(myReducer);

console.log(store.getState());

store.dispatch(actions.status());

console.log('change status: ',store.getState());
store.dispatch(sort({
    by:'job',
    value:2
}));
console.log('change sort: ', store.getState());