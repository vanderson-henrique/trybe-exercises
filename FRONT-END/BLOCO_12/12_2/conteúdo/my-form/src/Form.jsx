import React from "react";
import SelectTecnologia from './SelectTecnologia';
import Nome from './Nome';
import Checknow from './Checknow';
import About from './About';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleError = this.handleError.bind(this);

    this.state = {
      name: "",
      tecnologia: "Java Script",
      about: "",
      knowledge: false,
      formularioComErros: false,
    };
  }

  handleError(error) {
      error ? this.setState({ formularioComErros: true }) : this.setState({ formularioComErros: false });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="form">
        <h1>Meu primeiro formulário em React</h1>
        <form className="form">
          <fieldset className="form">
            <legend>Primeiro Fieldset</legend>
            <SelectTecnologia value={this.state.tecnologia} handleChange={this.handleChange} />
            <Nome value={this.state.name} handleChange={this.handleChange} handleError={this.handleError} />            
          </fieldset>

          <fieldset className="form">
            <legend>Segundo Fieldset</legend>
            <Checknow value={this.state.knowledge} handleChange={this.handleChange} />
            <About value={this.state.about} handleChange={this.handleChange} />

            <label>
              Faça o upload do arquivo:
              <input type="file" />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
