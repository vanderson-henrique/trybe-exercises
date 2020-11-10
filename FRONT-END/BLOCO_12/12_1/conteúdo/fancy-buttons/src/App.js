import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clickOk: 0,
      clickConfirma: 0,
      clickEnviar: 0,
      classColor1: "default",
      classColor2: "default",
      classColor3: "default"
    };

    this.ok = this.ok.bind(this);
    this.confirma = this.confirma.bind(this);
    this.enviar = this.enviar.bind(this);
    this.changeColor = this.changeColor.bind(this);

  }

  changeColor({ target }, fun) {
    if (this.state[fun] % 2 !== 0) {
      this.setState({
        [target.name]: "green",
      });
    }

    if (this.state[fun] % 2 === 0) {
      this.setState({
        [target.name]: "default",
      });
    }
  }

  ok(event) {
    console.log(event);
    this.setState((estadoAnterior, _props) => ({
      clickOk: estadoAnterior.clickOk + 1,
    }));

    this.changeColor(event, 'clickOk');
    
  }

  confirma(event) {
    this.setState((estadoAnterior, _props) => ({
      clickConfirma: estadoAnterior.clickConfirma + 1,
    }));

    this.changeColor(event, 'clickConfirma');
  }

  enviar(event) {
    this.setState((estadoAnterior, _props) => ({
      clickEnviar: estadoAnterior.clickEnviar + 1,
    }));

    this.changeColor(event, 'clickEnviar');

  }

  render() {
    return (
      <div>
        <button name='classColor1'className={this.state.classColor1} onClick={this.ok}>
          {this.state.clickOk}
        </button>
        <button name='classColor2' className={this.state.classColor2} onClick={this.confirma}>
          {this.state.clickConfirma}
        </button>
        <button name='classColor3' className={this.state.classColor3} onClick={this.enviar}>
          {this.state.clickEnviar}
        </button>
      </div>
    );
  }
}

export default App;
