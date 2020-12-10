import React from "react";
import { addInfo } from '../redux/actions/action';
import { connect } from 'react-redux';

class Email extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
    }
  }

  handleChange({ target }) {
    const { addInfo } = this.props;

    this.setState({ email: target.value }, () => {
      const { email } = this.state;
      addInfo('email', email);
    });
  }
  render() {
    const { email } = this.state;

    return (
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
          maxLength="50"
          required
        />
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addInfo: (info, value) => dispatch(addInfo(info, value)),
})

export default connect(null, mapDispatchToProps)(Email);
