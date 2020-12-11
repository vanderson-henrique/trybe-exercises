import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Sistema Trybe de Cadastro de Clientes</h1>
        <button>
          <Link to="/login">LOGIN</Link>
        </button>
      </div>
    );
  }
}

export default Home;
