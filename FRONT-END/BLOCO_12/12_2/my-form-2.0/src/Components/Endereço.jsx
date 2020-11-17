import React from "react";

class Endereço extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Endereço:
        <textarea
          type="text"
          name="endereço"
          value={value}
          onChange={handleChange}
          maxLength="200"
          required
        />
      </label>
    );
  }
}

export default Endereço;
