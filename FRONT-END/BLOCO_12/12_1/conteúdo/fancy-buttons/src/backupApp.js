import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clickOk: 0,
      clickConfirma: 0,
      clickEnviar: 0,
      color: 'grey'
    };

    this.ok = this.ok.bind(this);
    this.confirma = this.confirma.bind(this);
    this.enviar = this.enviar.bind(this);
  }

  ok() {
    this.setState((estadoAnterior, _props) => ({
      clickOk: estadoAnterior.clickOk + 1,
    }));

    if (this.state.clickOk % 2 !== 0) {
      this.setState({
        color: 'green'
      })
    }

    if (this.state.clickOk % 2 === 0) {
      this.setState({
        color: 'grey'
      })
    }
    console.log(this.state.color);
    }

  confirma() {
    this.setState((estadoAnterior, _props) => ({
      clickConfirma: estadoAnterior.clickConfirma + 1,
    }));
  }

  enviar() {
    this.setState((estadoAnterior, _props) => ({
      clickEnviar: estadoAnterior.clickEnviar + 1,
    }));
  }

  render() {
    return (
      <div>
        <button style={{backgroundColor: this.state.color}} onClick={this.ok}>{this.state.clickOk}</button>
        <button onClick={this.confirma}>{this.state.clickConfirma}</button>
        <button onClick={this.enviar}>{this.state.clickEnviar}</button>
      </div>
    );
  }
}

export default App;