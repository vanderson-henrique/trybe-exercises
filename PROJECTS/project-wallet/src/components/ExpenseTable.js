import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense, editExpense } from '../actions';
import btnExcluir from '../imgs/btn-excluir.svg';
import btnEditar from '../imgs/btn-editar.svg';

class ExpenseTable extends React.Component {
  render() {
    const { expenses, dellExpense, edExpense } = this.props;
    return (
      <div>
        <table className="table-header">
          <tr>
            <td>Descrição</td>
            <td>Tag</td>
            <td>Método de pagamento</td>
            <td>Valor</td>
            <td>Moeda</td>
            <td>Câmbio utilizado</td>
            <td>Valor convertido</td>
            <td>Moeda de conversão</td>
            <td>Editar/Excluir</td>
          </tr>
        </table>
        {expenses ? expenses.map((expense) => {
          const {
            value,
            description,
            tag,
            method,
            id,
            exchangeRates,
            currency,
          } = expense;
          const moeda = exchangeRates[currency].name;
          const currencyExchange = exchangeRates[currency].ask;
          const valueExchange = parseFloat(value) * currencyExchange;
          return (
            <table key={ id } className="table-data">
              <tr>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{moeda}</td>
                <td>{parseFloat(currencyExchange).toFixed(2)}</td>
                <td>{parseFloat(valueExchange).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => edExpense(expense) }
                  >
                    <img src={ btnEditar } alt="btnExcluir" width="20px" />
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => dellExpense(id) }
                  >
                    <img src={ btnExcluir } alt="btnExcluir" width="20px" />
                  </button>
                </td>
              </tr>
            </table>
          );
        }) : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dellExpense: (id) => dispatch(deleteExpense(id)),
  edExpense: (expense) => dispatch(editExpense(expense)),
});

ExpenseTable.propTypes = {
  expenses: PropTypes.shape([]).isRequired,
  dellExpense: PropTypes.func.isRequired,
  edExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
