import React from "react";
import estadosDoBrasil from "./EstadosDoBrasil";
import { addInfo } from '../redux/actions/action';
import { connect } from 'react-redux';

class Estado extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estado: '',
    }
  }

  handleChange({ target }) {
    const { addInfo } = this.props;
    this.setState({ estado: target.value }, () => {
      const { estado } = this.state;
      addInfo('estado', estado);
    });
  }

  render() {
    const { estado } = this.state;

    return (
      <label>
        Escolha seu Estado:
        <select name="estado" value={estado} onChange={this.handleChange} required>
          {estadosDoBrasil.map((estado) => (
            <option key={estado.uf}>{estado.nome}</option>
          ))}
        </select>
      </label>
    );
  }
}

const mapDispatchToProps = { addInfo };

export default connect(null, mapDispatchToProps)(Estado);
