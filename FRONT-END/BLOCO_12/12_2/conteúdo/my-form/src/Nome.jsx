import React from "react";

class Nome extends React.Component {
  render() {   

    const { value, handleChange, handleError } = this.props;

    let error = undefined;
    if (value.length < 4) error = 'Escreva pelo menos 4 caracteres';
    if (value.length > 20) error = 'Limite de 20 caracteres';
 
    return (
      <label>
        Nome:
        <input type="text" name="name" value={value} onChange={handleChange} />
        <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default Nome;
