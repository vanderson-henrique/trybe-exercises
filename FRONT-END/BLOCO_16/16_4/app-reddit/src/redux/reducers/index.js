import {
  RECEIVE_REDDIT_FAILURE,
  REQUEST_REDDIT,
  RECEIVE_REDDIT_SUCCESS,
} from "../actions";

const INITIAL_STATE = {
  loading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_REDDIT:
      return {
        ...state,
        loading: true,
      };
    case RECEIVE_REDDIT_SUCCESS:
      return {
        ...state,
        reddits: action.reddits,
        loading: false,
      };
    case RECEIVE_REDDIT_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
