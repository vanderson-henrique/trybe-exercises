import React from "react";
import "./App.css";
import pokemons from "./data";
import Pokedex from "./Pokedex";
import Button from './Button';

class App extends React.Component {
  constructor() {
    super();

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterType = this.filterType.bind(this);

    this.state = {
      pokemon: 0,
      pokemonFiltro: pokemons,
      disabled: false,
    };
  }

  nextPokemon() {
    if (this.state.pokemon === this.state.pokemonFiltro.length - 1) {
      this.setState({ pokemon: -1 });
    }

    this.setState((anterior) => ({
      pokemon: anterior.pokemon + 1,
    }));
  }

  filterType(type) {
    const pokemonFiltred = pokemons.filter((pokemon) => pokemon.type === type);
    if (type) {
      this.setState(() => ({
        pokemonFiltro: pokemonFiltred,
        pokemon: 0
      }))
    } else {
     this.setState(() => ({ 
      pokemonFiltro: pokemons,
      pokemon: 0
    }));
    }

    if (pokemonFiltred.length === 1) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }

  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.state.pokemonFiltro[this.state.pokemon]} />
        <div>
          <button className='buttonType' onClick={() => this.filterType()}>All</button>
          <Button pokemons={pokemons} filterType={this.filterType}/>
        </div>
        <div>
          <button className='buttonNext' onClick={this.nextPokemon} disabled={this.state.disabled} >Próximo Pokemon</button>
        </div>
      </div>
    );
  }
}

export default App;
