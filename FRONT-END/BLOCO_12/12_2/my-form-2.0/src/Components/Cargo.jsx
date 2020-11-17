import React from "react";

class Cargo extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Último Cargo
        <textarea
          type="text"
          name="cargo"
          value={value}
          onChange={handleChange}
          maxLength="40"
          required
          onMouseEnter={() => {
            alert('Preencha com cuidado esta informação.');
          }}
        />
      </label>
    );
  }
}

export default Cargo;
