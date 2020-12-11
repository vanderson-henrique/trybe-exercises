import './App.css';
import { Home, Login, BaseClients, Register } from './pages';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/base" component={BaseClients}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </div>
  );
}

export default App;
