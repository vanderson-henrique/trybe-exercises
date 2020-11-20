import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users'
import StrictAccess from './StrictAccess';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/about" >About</Link></li>
        <li><Link to="/users" >Users</Link></li>
        <li><Link to="/strictaccess" >Strict Access</Link></li>
      </ul>
      <Switch>
      <Route path="/about" component={About} />
      <Route path="/users" render={(props) => <Users {...props} greetingMessage="Good Morning"/>} />

      <Route path="/strictaccess" >
          <StrictAccess user={ {username: "joao", password: 1234} } />
        </Route>

      <Route exact path="/" component={Home} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;