import React, { Component } from 'react';
import { addClientAction } from '../redux/actions/addClientAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);

    this.changeValue = this.changeValue.bind(this);
    this.clickRegister = this.clickRegister.bind(this);

    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  changeValue({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  clickRegister() {
    const { name, age, email } = this.state;
    const { addClientAction } = this.props;
    addClientAction(name, age, email);
    this.setState({ name: '', age: '', email: '' });
  }

  render() {
    const { name, age, email } = this.state;
    return (
      <div>
        <form>
          <label htmlFor='name'>Nome</label>
          <input
            id='name'
            name='name'
            type='text'
            value={name}
            onChange={this.changeValue}
          />
          <label htmlFor='age'>Idade</label>
          <input
            id='age'
            name='age'
            type='number'
            value={age}
            onChange={this.changeValue}
          />
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='text'
            value={email}
            onChange={this.changeValue}
          />
          <button type='button' onClick={this.clickRegister}>
            Cadastrar
          </button>
          <Link to="/base">Clientes Cadastrados</Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { addClientAction };

export default connect(null, mapDispatchToProps)(Register);
