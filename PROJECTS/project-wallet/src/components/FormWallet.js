import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fecthAwesome, addExpenses } from '../actions';

class FormWallet extends Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      value: '',
      description: '',
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

  async handleClick() {
    const { fetchAPI } = this.props;
    await fetchAPI();
    const { add, currencies } = this.props;
    this.setState({ exchangeRates: currencies });
    add(this.state);
    this.setState({ value: '', description: '' });
  }

  render() {
    const { value, description } = this.state;
    const { currencies } = this.props;
    const arrayCurrencies = Object.keys(currencies).filter((i) => i !== 'USDT');
    return (
      <form className="form">
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
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fecthAwesome()),
  add: (expense) => dispatch(addExpenses(expense)),
});

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  expenses: wallet.expenses,
});

FormWallet.propTypes = {
  fetchAPI: PropTypes.func.isRequired,
  currencies: PropTypes.shape([]).isRequired,
  add: PropTypes.func.isRequired,
  expenseEdit: PropTypes.shape({}).isRequired,
  exchangeRates: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormWallet);
