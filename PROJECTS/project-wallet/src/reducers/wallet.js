// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  CURRENCY_QUERY,
  ADD_EXPENSES,
  DELETE_EXPENSE,
  EDITING,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_QUERY:
    return { ...state, currencies: action.currencies };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          id: state.expenses.length,
          value: action.expense.value,
          description: action.expense.description,
          currency: action.expense.currency,
          method: action.expense.method,
          tag: action.expense.tag,
          exchangeRates: action.expense.exchangeRates,
        },
      ],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  case EDITING:
    return {
      ...state,
      expenses: [
        ...state.expenses.map((expense) => {
          if (expense.id !== action.expenseEdit.id) {
            return expense;
          } return (
            { id: action.expenseEdit.id,
              value: action.newData.value,
              description: action.newData.description,
              currency: action.newData.currency,
              method: action.newData.method,
              tag: action.newData.tag,
              exchangeRates: action.expenseEdit.exchangeRates,
            }
          );
        }),
      ],
    };
  default:
    return state;
  }
};

export default wallet;
