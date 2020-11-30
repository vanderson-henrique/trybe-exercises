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