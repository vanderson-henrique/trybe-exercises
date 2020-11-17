import React from "react";

class About extends React.Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Conte mais sobre você:
        <textarea name="about" value={value} onChange={handleChange} />
      </label>
    );
  }
}

export default About;
