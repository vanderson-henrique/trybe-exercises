import "./Form.css";
import React from "react";
import Nome from "./Nome";
import Email from "./Email";
import CPF from "./CPF";
import Endereço from "./Endereço";
import Cidade from "./Cidade";
import Estado from "./Estado";
import TipoMoradia from "./TipoMoradia";
import Resumo from "./Resumo";
import Cargo from "./Cargo";
import Descrição from "./Descrição";
import Curriculo from "./Curriculo";

class Form extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      showCurriculo: false,
    }
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ showCurriculo: true });
  }

  render() {
    const { showCurriculo } = this.state;
    return (
      <div className="flex">
        <h1>Meu Formulário 2.0 - REACT-REDUX</h1>
        <form className="flex">
          <fieldset className="flex">
            <legend>Dados Pessoais</legend>
            <Nome />
            <Email />
            <CPF />
            <Endereço />
            <Cidade />
            <Estado />
            <TipoMoradia />
          </fieldset>
          <fieldset className="flex">
            <legend>Dados do último emprego</legend>
            <Resumo />
            <Cargo />
            <Descrição />
          </fieldset>
          <button type="submit" onClick={this.onSubmit}>
            Enviar
          </button>
          {showCurriculo ? <Curriculo /> : "" }
        </form>
      </div>
    );
  }
}

export default Form;
