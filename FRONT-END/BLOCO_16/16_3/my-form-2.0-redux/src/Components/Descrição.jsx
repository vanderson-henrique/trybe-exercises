import React from "react";
import { addInfo } from '../redux/actions/action';
import { connect } from 'react-redux';

class Descrição extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      descrição: '',
    }
  }

  handleChange({ target }) {
    const { addInfo } = this.props;
    this.setState({ descrição: target.value }, () => {
      const { descrição } = this.state;
      addInfo('descrição', descrição);
    });
  }

  render() {
    const { descrição } = this.state;

    return (
      <label>
        Descrição do cargo
        <textarea
          type="text"
          name="descrição"
          value={descrição}
          onChange={this.handleChange}
          maxLength="500"
          required
        />
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addInfo: (info, value) => dispatch(addInfo(info, value)),
})

export default connect(null, mapDispatchToProps)(Descrição);
