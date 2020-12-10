import React from "react";
import { addInfo } from '../redux/actions/action';
import { connect } from 'react-redux';

class Endereço extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      endereço: '',
    }
  }

  handleChange({ target }) {
    const { addInfo } = this.props;
    this.setState({ endereço: target.value }, () => {
      const { endereço } = this.state;
      addInfo('endereço', endereço);
    });
  }
  render() {
    const { endereço } = this.state;

    return (
      <label>
        Endereço:
        <textarea
          type="text"
          name="endereço"
          value={endereço}
          onChange={this.handleChange}
          maxLength="200"
          required
        />
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addInfo: (info, value) => dispatch(addInfo(info, value)),
})

export default connect(null, mapDispatchToProps)(Endereço);
