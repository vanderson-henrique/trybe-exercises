import React from "react";

class Email extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={value}
          onChange={handleChange}
          maxLength="50"
          required
        />
      </label>
    );
  }
}

export default Email;
