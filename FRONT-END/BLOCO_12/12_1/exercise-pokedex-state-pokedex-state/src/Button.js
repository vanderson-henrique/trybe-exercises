import React from "react";

class Button extends React.Component {
  render() {
    const { filterType } = this.props;

    const arrayTypes = this.props.pokemons.map((pokemons) => pokemons.type);
    const arrayFiltred = arrayTypes.filter(
      (elem, index, array) => index === array.indexOf(elem)
    );

    return arrayFiltred.map((item, index) => (
      <button className='buttonType' key={index} onClick={() => filterType(item)}>
        {item}
      </button>
    ));
  }
}

export default Button;
