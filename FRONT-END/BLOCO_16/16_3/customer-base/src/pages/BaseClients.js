import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BaseClients extends Component {
  render() {
    const {
      authLogin: { username, password },
    } = this.props;
    const { listClients } = this.props;
    const validate = () => {
      if (username !== '' && password !== '') return true;
      return false;
    };
    return (
      <div>
        <h1>Base de Clientes</h1>
        <Link to='/register'>Cadastro de Clientes</Link>
        {!validate() ? (
          <h2>Login não efetuado</h2>
        ) : (
          <div>
            <ul>
              {listClients.length === 0 ? <h2>Nenhum Cliente Cadastrado</h2> : listClients.map((client) => (
                <li key={client.name}>
                  {client.name} {client.age} {client.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authLogin: state.authReducer,
  listClients: state.listClientsReducer,
});

export default connect(mapStateToProps)(BaseClients);
