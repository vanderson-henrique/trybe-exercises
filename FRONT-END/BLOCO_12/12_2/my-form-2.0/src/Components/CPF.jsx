import React from "react";

class CPF extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        CPF:
        <input
          type="text"
          name="cpf"
          value={value}
          onChange={handleChange}
          maxLength="11"
          required
        />
      </label>
    );
  }
}

export default CPF;
