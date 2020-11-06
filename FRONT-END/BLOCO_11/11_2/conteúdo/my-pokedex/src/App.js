import './App.css';
import pokemons from "./Data";
import Pokedex from './Pokedex';

function App() {
  return (
    <div className='App'>
    <Pokedex dados={pokemons}/>
    </div>
  )
}

export default App;
