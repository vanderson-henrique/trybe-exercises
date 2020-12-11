import { AUTHENTICATE } from "../actions/authAction";

const INITIAL_STATE = {
  username: "",
  password: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default authReducer;
