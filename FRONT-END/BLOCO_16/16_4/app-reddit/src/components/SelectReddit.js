import React, { Component } from "react";
import { connect } from "react-redux";
import fetchReddit from "../redux/actions";

class SelectReddit extends Component {
  constructor(props) {
    super(props);

    this.selectReddit = this.selectReddit.bind(this);
    this.changeUpdateTime = this.changeUpdateTime.bind(this);

    this.state = {
      redditSelected: "",
      updateTime: "",
    };
  }

  selectReddit({ target }) {
    const { fetchReddit } = this.props;
    this.setState({ redditSelected: target.value }, () => {
      const { redditSelected } = this.state;
      fetchReddit(redditSelected);
    });
  }

  changeUpdateTime() {
    const today = new Date();
    const data = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    this.setState({ updateTime: data });      
  }

  render() {
    const { fetchReddit } = this.props;
    const { redditSelected, updateTime } = this.state;
    return (
      <div>
        <h2>Escolha seu Reddit</h2>
        <select onChange={this.selectReddit}>
          <option value="">Selecione um Reddit</option>
          <option value="reactjs">reactjs</option>
          <option value="frontend">frontend</option>
        </select>
        <button
          onClick={() => {
            fetchReddit(redditSelected);
            this.changeUpdateTime();
          }}
        >
          Atualizar lista
        </button>
        {updateTime ? <p>Última atualização: {updateTime} </p> : ""}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchReddit: (subreddit) => dispatch(fetchReddit(subreddit)),
});

export default connect(null, mapDispatchToProps)(SelectReddit);
