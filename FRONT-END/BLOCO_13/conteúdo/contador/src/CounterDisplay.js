import React from "react";

class CounterDisplay extends React.Component {

    shouldComponentUpdate({ value }, nextState) {
        if(value % 3 !== 0) return false;
        if(value >= 13 && value <= 15) return false;
        return true;
    }

  render() {
    return <div>counter: {this.props.value}</div>;
  }
}

export default CounterDisplay;
