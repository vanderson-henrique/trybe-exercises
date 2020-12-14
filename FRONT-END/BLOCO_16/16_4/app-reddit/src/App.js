import './App.css';
import ListReddit from './components/ListReddit';
import SelectReddit from './components/SelectReddit';

function App() {
  return (
    <div className="App">
      <h1>Consulta Reddit</h1>
      <SelectReddit />
      <ListReddit />
    </div>
  );
}

export default App;
