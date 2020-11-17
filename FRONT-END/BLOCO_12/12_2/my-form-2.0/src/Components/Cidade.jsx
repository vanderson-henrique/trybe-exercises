import React from "react";

class Cidade extends React.Component {

   render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Cidade:
        <input
          type="text"
          name="cidade"
          value={value}
          onChange={handleChange}
          maxLength='28'
          required
        />
      </label>
    );
  }
}

export default Cidade;
