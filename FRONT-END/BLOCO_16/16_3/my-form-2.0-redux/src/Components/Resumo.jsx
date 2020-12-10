import React from "react";
import { addInfo } from '../redux/actions/action';
import { connect } from 'react-redux';

class Resumo extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      resumo: '',
    }
  }

  handleChange({ target }) {
    const { addInfo } = this.props;
    this.setState({ resumo: target.value }, () => {
      const { resumo } = this.state;
      addInfo('resumo', resumo);
    });
  }

  render() {
    const { resumo } = this.state

    return (
      <label>
        Resumo do currículo
        <textarea
          type="text"
          name="resumo"
          value={resumo}
          onChange={this.handleChange}
          maxLength="1000"
          required
        />
      </label>
    );
  }
}

const mapDispatchToProps = { addInfo };

export default connect(null, mapDispatchToProps)(Resumo);
