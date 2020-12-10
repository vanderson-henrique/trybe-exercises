import React from "react";
import { addInfo } from '../redux/actions/action';
import { connect } from 'react-redux';

class CPF extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      cpf: '',
    }
  }

  handleChange({ target }) {
    const { addInfo } = this.props;
    this.setState({ cpf: target.value }, () => {
      const { cpf } = this.state;
      addInfo('cpf', cpf);
    });
  }
  render() {
    const { cpf } = this.state;

    return (
      <label>
        CPF:
        <input
          type="text"
          name="cpf"
          value={cpf}
          onChange={this.handleChange}
          maxLength="11"
          required
        />
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addInfo: (info, value) => dispatch(addInfo(info, value)),
})

export default connect(null, mapDispatchToProps)(CPF);
