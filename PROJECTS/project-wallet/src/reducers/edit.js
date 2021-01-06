import {
  EDIT_EXPENSE,
} from '../actions';

const INITIAL_STATE = {
  inEditing: {
    edit: false,
    expenseEdit: {},
  },
};

const edit = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EDIT_EXPENSE:
    return {
      ...state,
      inEditing: {
        edit: !state.inEditing.edit,
        expenseEdit: action.expenseEdit,
      },
    };
  default:
    return state;
  }
};

export default edit;
