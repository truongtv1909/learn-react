import { createStore} from 'redux';
import { status, sort } from '../tranning/actions/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);
console.log('defaul: ',store.getState());

store.dispatch(status());
store.dispatch(sort(
{   
    by:'name',
    value:-1
}
));
console.log('actions: ', store.getState());

