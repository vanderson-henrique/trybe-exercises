import React from "react";
import estadosDoBrasil from "./EstadosDoBrasil";

class Estado extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Escolha seu Estado:
        <select name="estado" value={value} onChange={handleChange} required>
          {estadosDoBrasil.map((estado) => (
            <option key={estado.uf}>{estado.nome}</option>
          ))}
        </select>
      </label>
    );
  }
}

export default Estado;
