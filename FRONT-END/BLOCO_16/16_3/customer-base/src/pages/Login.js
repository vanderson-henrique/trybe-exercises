import React, { Component } from 'react';
import { authAction } from '../redux/actions/authAction';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);

        this.changeValue = this.changeValue.bind(this);
        this.clickLogin = this.clickLogin.bind(this);

        this.state = {
            username: '',
            password: '',
        }
    }

    changeValue({ target }) {
        const { name, value } = target;
        const { authAction } = this.props;

        this.setState({ [name]: value }, () => {
            const { username, password } = this.state;
            authAction(username, password);
        });
    }

    clickLogin(event) {
        const { username, password } = this.state;
        const { history } = this.props;
        event.preventDefault();

        if (username === '' || password === '') {
           return window.alert('Preencha os campos de Login e senha')
        }
        return history.push('/base');
    }

    render() {
        const { username, password } = this.state;
        return (
            <div>
                <h1>LOGIN</h1>
                <form>
                <label htmlFor="username">Username</label>
                    <input
                    placeholder="Insira seu username"
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={this.changeValue}
                    />
                <label htmlFor="password">Password</label>
                    <input
                    placeholder="Insira sua senha"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.changeValue}
                    />
                </form>
                <button type='button' onClick={this.clickLogin} >Login</button>
            </div>
        )
    }
}

const mapDispatchToProps = { authAction };

export default connect(null, mapDispatchToProps)(Login);