import React from "react";

class TipoMoradia extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Escolha o tipo de moradia:
        <input
          type="radio"
          name="moradia"
          value="casa"
          onChange={handleChange}
          checked={value === "casa"}
        />
        Casa
        <input
          type="radio"
          name="moradia"
          value="apartamento"
          onChange={handleChange}
          checked={value === "apartamento"}
        />
        Apartamento
      </label>
    );
  }
}

export default TipoMoradia;
