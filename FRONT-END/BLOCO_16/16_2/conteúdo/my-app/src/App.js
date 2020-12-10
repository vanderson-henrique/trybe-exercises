import React from 'react';
// o provider é o meio pelo qual disponibilizamos o Store
import { Provider } from 'react-redux';
import store from './store';
import List from './List';
import InputList from './InputList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <InputList />
          <List />
        </Provider>
      </div>
    );
  }
}

export default App;
