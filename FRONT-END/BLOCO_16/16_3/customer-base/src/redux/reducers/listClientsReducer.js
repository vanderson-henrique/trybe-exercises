import { ADD_CLIENT, REMOVE_CLIENT } from "../actions/addClientAction";
const INITIAL_STATE = [];

const listClientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      return [...state, action.client];
    case REMOVE_CLIENT:
      return state.filter((client) => client.name !== action.name);
    default:
      return state;
  }
};

export default listClientsReducer;
