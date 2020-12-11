import { combineReducers } from 'redux';
import authReducer from './authReducer';
import listClientsReducer from './listClientsReducer';

const rootReducer = combineReducers({ authReducer, listClientsReducer });

export default rootReducer;