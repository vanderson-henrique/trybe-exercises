import { ADD_CLIENT } from '../actions/addClientAction';
const INITIAL_STATE = [];

const listClientsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_CLIENT:
            return [...state, action.client];
        default:
            return state;
    }
}

export default listClientsReducer;