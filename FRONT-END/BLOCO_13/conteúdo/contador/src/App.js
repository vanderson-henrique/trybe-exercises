import React from 'react';
import './App.css';
import CounterDisplay from './CounterDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shoultComponentUpdate', this.state.counter, nextState.counter)
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', this.state.counter, prevState.counter);
  }

  componentDidMount() {
    this.setState({ counter: 10 })
  }

  render() {
    return ( <div>
      Contador
      <button 
      onClick={() => this.setState((state) => ({ counter: state.counter + 1}))}>
        Soma
      </button>
      <CounterDisplay value={this.state.counter} />
    </div>
    )
  }
}


export default App;
