import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Form from "./Components/Form";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Form />
      </Provider>
    );
  }
}

export default App;
