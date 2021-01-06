// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN } from '../actions';

const user = (state = {}, action) => {
  switch (action.type) {
  case LOGIN:
    return { ...state, email: action.email };
  default:
    return state;
  }
};

export default user;
