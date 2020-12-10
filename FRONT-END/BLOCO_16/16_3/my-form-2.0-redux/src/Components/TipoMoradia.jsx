import React from "react";
import { addInfo } from '../redux/actions/action';
import { connect } from 'react-redux';

class TipoMoradia extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      moradia: '',
    }
  }

  handleChange({ target }) {
    const { addInfo } = this.props;
    this.setState({ moradia: target.value }, () => {
      const { moradia } = this.state;
      addInfo('moradia', moradia);
    });
  }

  render() {
    const { moradia } = this.state;

    return (
      <label>
        Escolha o tipo de moradia:
        <label htmlFor="casa">
        <input
          id="casa"
          type="radio"
          name="moradia"
          value="casa"
          onChange={this.handleChange}
          checked={moradia === "casa"}
        />
        Casa
        </label>
        <label htmlFor="apartamento">
        <input
          id="apartamento"
          type="radio"
          name="moradia"
          value="apartamento"
          onChange={this.handleChange}
          checked={moradia === "apartamento"}
        />
        Apartamento
        </label>
      </label>
    );
  }
}

const mapDispatchToProps = { addInfo };

export default connect(null, mapDispatchToProps)(TipoMoradia);
