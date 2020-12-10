import React from "react";
import { addInfo } from '../redux/actions/action';
import { connect } from 'react-redux';

class Cargo extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      cargo: '',
    }
  }

  handleChange({ target }) {
    const { addInfo } = this.props;
    this.setState({ cargo: target.value }, () => {
      const { cargo } = this.state;
      addInfo('cargo', cargo);
    });
  }

  render() {
    const { cargo } = this.state;

    return (
      <label>
        Último Cargo
        <textarea
          type="text"
          name="cargo"
          value={cargo}
          onChange={this.handleChange}
          maxLength="40"
          required
        />
      </label>
    );
  }
}

const mapDispatchToProps = { addInfo };

export default connect(null, mapDispatchToProps)(Cargo);
