import React from 'react';

class SelectTecnologia extends React.Component {
    render() {

        const { value, handleChange } = this.props;

        return (
            <label>
              Escolha sua Tecnologia:
              <select
                name="tecnologia"
                value={value}
                onChange={handleChange}
              >
                <option>Java Script</option>
                <option>HTML 5</option>
                <option>CSS 3</option>
                <option>React</option>
              </select>
            </label>
        )
    }
}

export default SelectTecnologia;