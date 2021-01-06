// Coloque aqui suas actions
import awesomeApi from '../services/awesomeApi';

export const LOGIN = 'LOGIN';
export const CURRENCY_QUERY = 'CURRENCY_QUERY';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const RECEIVE_FAILURE = 'RECEIVE_FAILURE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const EDITING = 'EDITING';

export const loginAction = (email) => ({
  type: LOGIN,
  email,
});

export const currencyQuery = (currencies) => ({
  type: CURRENCY_QUERY,
  currencies,
});

export const receiveFailure = (error) => ({
  type: RECEIVE_FAILURE,
  error,
});

export const addExpenses = (expense) => ({
  type: ADD_EXPENSES,
  expense,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const editExpense = (expenseEdit) => ({
  type: EDIT_EXPENSE,
  expenseEdit,
});

export const editing = (expenseEdit, newData) => ({
  type: EDITING,
  expenseEdit,
  newData,
});

export const fecthAwesome = () => (
  (dispatch) => (
    awesomeApi().then(
      (response) => dispatch(currencyQuery(response)),
      (error) => dispatch(receiveFailure(error)),
    )));
