import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fecthAwesome, addExpenses, editExpense, editing } from '../actions';

class EditWallet extends React.Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
    this.editWallet = this.editWallet.bind(this);

    const { expenseEdit } = this.props;

    this.state = {
      value: expenseEdit.value,
      description: expenseEdit.description,
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  changeValue({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  editWallet() {
    const { edExpense, edit, expenseEdit } = this.props;
    edit(expenseEdit, this.state);
    edExpense();
    this.setState({ value: '', description: '' });
  }

  render() {
    const { value, description } = this.state;
    const { currencies } = this.props;
    const arrayCurrencies = Object.keys(currencies).filter((i) => i !== 'USDT');
    return (
      <form className="form-edit">
        <label htmlFor="value">
          Valor:
          <input
            data-testid="value-input"
            id="value"
            name="value"
            type="text"
            value={ value }
            onChange={ this.changeValue }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            id="description"
            name="description"
            type="text"
            value={ description }
            onChange={ this.changeValue }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            id="currency"
            name="currency"
            data-testid="currency-input"
            onChange={ this.changeValue }
          >
            {arrayCurrencies && arrayCurrencies.map((item) => (
              <option value={ item } key={ item } data-testid={ item }>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          Método de Pagamento:
          <select
            data-testid="method-input"
            name="method"
            id="method"
            onChange={ this.changeValue }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select
            data-testid="tag-input"
            name="tag"
            id="tag"
            onChange={ this.changeValue }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.editWallet }>Editar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fecthAwesome()),
  add: (expense) => dispatch(addExpenses(expense)),
  edExpense: (id) => dispatch(editExpense(id)),
  edit: (expenseEdit, newData) => dispatch(editing(expenseEdit, newData)),
});

const mapStateToProps = ({ wallet, edit }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
  expenseEdit: edit.inEditing.expenseEdit,
});

EditWallet.propTypes = {
  fetchAPI: PropTypes.func.isRequired,
  currencies: PropTypes.shape([]).isRequired,
  expenseEdit: PropTypes.shape({
    value: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  edExpense: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditWallet);
