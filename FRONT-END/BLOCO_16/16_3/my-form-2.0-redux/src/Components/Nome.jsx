import React from "react";
import { addInfo } from '../redux/actions/action';
import { connect } from 'react-redux';

class Nome extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
    }
  }

  handleChange({ target }) {
    const { addInfo } = this.props;
    this.setState({ nome: target.value }, () => {
      const { nome } = this.state;
      addInfo('nome', nome.toUpperCase());
    });
  }

  render() {
    const { nome } = this.state;

    return (
      <div>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={nome.toUpperCase()}
            onChange={this.handleChange}
            maxLength='40'
            required
          />
        </label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addInfo: (info, value) => dispatch(addInfo(info, value)),
})

export default connect(null, mapDispatchToProps)(Nome);
