import logo from './logo.svg';
import './App.css';

const lista = ['Estudar React', 'Estudar Redux', 'Estudar Jest', 'Mais uma tarefa'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
};

function App() {
  return (
    lista.map(item => <ul>{task(item)}</ul>)
  );
};

export default App;
