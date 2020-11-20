import React from "react";
import pokemons from "./data";

class PokemonDetails extends React.Component {
  render() {
      const { id } = this.props.match.params;
      const pokemonSelected = pokemons.filter(pokemon => pokemon.id === parseInt(id));
    return (
      <div>
        <p>Nome: {pokemonSelected[0].name}</p>
        <p>Tipo: {pokemonSelected[0].type}</p>
        <p>
          Peso médio: {pokemonSelected[0].averageWeight.value}{" "}
          {pokemonSelected[0].averageWeight.measurementUnit}
        </p>
        <p>Sumário informativo: {pokemonSelected[0].summary}</p>

        {pokemonSelected[0].foundAt.map((local, index) => {
          return (
            <div key={index}>
              <h2>{local.location}</h2>
              <img src={local.map} alt=""/>
            </div>
          );
        })}
        <label> Favoritar Pokemon
        <input name="isFavorite" type="checkbox" onChange={this.props.onFavorite} />
        </label>

      </div>
    );
  }
}

export default PokemonDetails;
