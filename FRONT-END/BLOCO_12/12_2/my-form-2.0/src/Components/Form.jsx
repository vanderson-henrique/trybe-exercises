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
import Curriculo from './Curriculo';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: "",
      email: "",
      cpf: "",
      endereço: "",
      cidade: "",
      estado: "",
      moradia: "",
      resumo: "",
      cargo: "",
      descrição: "",
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
      <Curriculo estados={this.state}/>
  }

  render() {
    return (
      <div className="flex">
        <h1>Meu Formulário 2.0 - REACT</h1>
        <form className="flex">
          <fieldset className="flex">
            <legend>Dados Pessoais</legend>
            <Nome value={this.state.nome} handleChange={this.handleChange} />
            <Email value={this.state.email} handleChange={this.handleChange} />
            <CPF value={this.state.cpf} handleChange={this.handleChange} />
            <Endereço
              value={this.state.endereço}
              handleChange={this.handleChange}
            />
            <Cidade
              value={this.state.cidade}
              handleChange={this.handleChange}
            />
            <Estado
              value={this.state.estado}
              handleChange={this.handleChange}
            />
            <TipoMoradia
              value={this.state.moradia}
              handleChange={this.handleChange}
            />
          </fieldset>
          <fieldset className="flex">
            <legend>Dados do último emprego</legend>
            <Resumo
              value={this.state.resumo}
              handleChange={this.handleChange}
            />
            <Cargo value={this.state.cargo} handleChange={this.handleChange} />
            <Descrição
              value={this.state.descrição}
              handleChange={this.handleChange}
            />
          </fieldset>
          <button type="submit" onClick={this.onSubmit}>Enviar</button>
          <Curriculo estados={this.state}/>
        </form>
      </div>
    );
  }
}

export default Form;
