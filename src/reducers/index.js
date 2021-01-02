// Reducers Combiner
import {combineReducers} from 'redux';
// Reducers
import Counter from './counter';
import IsLogged from './IsLogged';

const allReducers = combineReducers({
    counter : Counter,
    logged : IsLogged,
});

export default allReducers;