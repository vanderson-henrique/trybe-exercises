import React from "react";

class Checknow extends React.Component {
  render() {

    const { value, handleChange } = this.props;

    return (
      <label>
        Você já sabe o básico?
        <input
          type="checkbox"
          name="knowledge"
          value={value}
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default Checknow;
