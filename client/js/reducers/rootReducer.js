import { combineReducers } from 'redux';
import currentUserReducer from './currentUserReducer';

const rootReducer = combineReducers({ currentUser: currentUserReducer });

export default rootReducer;
