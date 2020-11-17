import React from "react";

class Resumo extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Resumo do currículo
        <textarea
          type="text"
          name="resumo"
          value={value}
          onChange={handleChange}
          maxLength="1000"
          required
        />
      </label>
    );
  }
}

export default Resumo;
