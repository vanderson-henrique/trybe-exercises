import { createStore, combineReducers } from 'redux';
import { reducerAddData } from '../reducers';

const rootReducer = combineReducers({
    reducerAddData,
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;