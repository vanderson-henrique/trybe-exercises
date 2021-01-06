import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import carteira from '../imgs/carteira.svg';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    let amount = 0;
    if (expenses.length > 0) {
      expenses.forEach((element) => {
        const value = parseFloat(element.value);
        const { currency } = element;
        const valueCurrency = (parseFloat(element.exchangeRates[currency].ask));
        const valueConvert = value * valueCurrency;
        amount += (parseFloat(valueConvert));
      });
    }
    return (
      <div className="container-header">
        <img src={ carteira } alt="imagem da carteira" width="80px" height="80px" />
        <div className="container-info">
          <span data-testid="email-field">
            Email:
            { email }
          </span>
          <div className="container-amount">
            <span data-testid="total-field">
              Despesa Total: R$
              {amount.toFixed(2)}
            </span>
            <span data-testid="header-currency-field">
              BRL
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.shape([]).isRequired,
};

export default connect(mapStateToProps)(Header);
