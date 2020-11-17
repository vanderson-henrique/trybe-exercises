import React from "react";

class Descrição extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Descrição do cargo
        <textarea
          type="text"
          name="descrição"
          value={value}
          onChange={handleChange}
          maxLength="500"
          required
        />
      </label>
    );
  }
}

export default Descrição;
