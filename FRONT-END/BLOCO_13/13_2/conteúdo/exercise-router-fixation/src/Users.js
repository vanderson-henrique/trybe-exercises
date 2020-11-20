import React from "react";

const Users = (props) => {
  const { greetingMessage = "Hi" } = props;
  return (
    <div>
      <h2> Users </h2>
      <p> {greetingMessage}, this is my awesome Users component</p>
    </div>
  );
};

export default Users;
