import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

class StrictAccess extends React.Component {
  render() {
    const { user } = this.props;
    const { username, password } = user;
    return (
      <div>
        {username === "joao" && password === 1234 ? (
          <p>Welcome {username}</p>
        ) : (
           <Redirect to="/" />
        )}
      </div>
    );
  }
}

export default StrictAccess;
