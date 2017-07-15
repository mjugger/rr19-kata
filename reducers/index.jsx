import { combineReducers } from 'redux';
import recordStore from './records';

const rootReducer = combineReducers({
    recordStore
});

export default rootReducer;
