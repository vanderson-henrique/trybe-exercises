import React, { Component } from "react";
import { connect } from "react-redux";

class ListReddit extends Component {
  render() {
    const { reddits, loading, error } = this.props;

    if (!loading && reddits) {
      return (
        <div className="list-reddit">
          <h2>Lista de Reddit</h2>
          <div className="list">
          <ul>
            {reddits
              ? reddits.map((item, index) => (
                  <li key={index}>{item.data.title}</li>
                ))
              : "Selecione um Reddit"}
          </ul>
          </div>
        </div>
      );
    }

  if (error) { return <div>{error}</div>}
  if (loading) {return <div>Loading...</div>}
  return <div>Escolha um Reddit para visualizar sua lista!</div>;
  }
}

const mapStateToProps = (state) => ({
  reddits: state.reducer.reddits,
  loading: state.reducer.loading,
  error: state.reducer.error,
});

export default connect(mapStateToProps)(ListReddit);
