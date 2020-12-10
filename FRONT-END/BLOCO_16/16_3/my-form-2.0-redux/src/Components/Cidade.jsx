import React from "react";
import { addInfo } from '../redux/actions/action';
import { connect } from 'react-redux';

class Cidade extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      cidade: '',
    }
  }

  handleChange({ target }) {
    const { addInfo } = this.props;
    this.setState({ cidade: target.value }, () => {
      const { cidade } = this.state;
      addInfo('cidade', cidade);
    });
  }

   render() {
    const { cidade } = this.state;

    return (
      <label>
        Cidade:
        <input
          type="text"
          name="cidade"
          value={cidade}
          onChange={this.handleChange}
          maxLength='28'
          required
        />
      </label>
    );
  }
}

const mapDispatchToProps = { addInfo };

export default connect(null, mapDispatchToProps)(Cidade);
