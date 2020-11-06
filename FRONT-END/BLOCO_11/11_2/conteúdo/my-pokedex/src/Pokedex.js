import React from "react";
import Pokemon from "./Pokemon";
import './index.css'
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render() {
    const arrayPokemons = this.props.dados;

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

Pokedex.propTypes = {
  dados: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight:PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string
  }))
};

export default Pokedex;
