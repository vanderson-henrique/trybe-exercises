import React from "react";
import PropTypes from "prop-types";

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.pokemon;

    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average Weight: {averageWeight.value}{" "}
            {averageWeight.measurementUnit}
          </p>
        </div>
        <div>
        <img src={image}></img>
        <a href={moreInfo} target="_blank">
          Saiba mais...
        </a>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    moreInfo: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
  }),
};

export default Pokemon;
