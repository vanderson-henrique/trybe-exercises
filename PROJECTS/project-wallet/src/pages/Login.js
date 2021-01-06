import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
    this.clickLogin = this.clickLogin.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  changeValue({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  clickLogin() {
    const { login, history } = this.props;
    const { email } = this.state;
    login(email);
    return history.push('/carteira');
  }

  // Referência desta função para validação de email:
  // https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/
  validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  render() {
    const { email, password } = this.state;
    const numberCharacteres = 5;
    const validate = password.length > numberCharacteres && this.validarEmail(email);
    return (
      <div className="container-login">
        <h1>Trybe Wallet</h1>
        <form className="form form-login">
          <label htmlFor="email">
            Email
            <input
              data-testid="email-input"
              placeholder="Insira seu e-mail"
              id="email"
              name="email"
              type="text"
              value={ email }
              onChange={ this.changeValue }
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              data-testid="password-input"
              placeholder="Insira sua senha"
              id="password"
              name="password"
              type="password"
              value={ password }
              onChange={ this.changeValue }
            />
          </label>
          {!validate ? (
            <button disabled type="button">
              Entrar
            </button>
          ) : (
            <button type="button" onClick={ this.clickLogin }>
              Entrar
            </button>
          )}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
