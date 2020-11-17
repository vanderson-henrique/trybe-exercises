import React from "react";

class Nome extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <div>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={value.toUpperCase()}
            onChange={handleChange}
            maxLength='40'
            required
          />
        </label>
      </div>
    );
  }
}

export default Nome;
