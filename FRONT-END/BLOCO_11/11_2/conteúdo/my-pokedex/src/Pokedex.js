import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "./Data";
import './index.css'

class Pokedex extends React.Component {
  render() {
    const arrayPokemons = pokemons;

    return (
      <div className='pokedex'>
        <h1>Pokedex</h1>
        {arrayPokemons.map((pokemon) => (
          <div key={pokemon.id} className='container-pokemon'>
            <Pokemon pokemon={pokemon} />
          </div>
        ))}
      </div>
    );
  }
}

export default Pokedex;
