import React from "react";

export default class Categorias extends React.Component {
  constructor() {
    super();

    this.state = {
      nameOption: "all",
    };
  }

  handleOption({ target }) {
      const { handleOptionChange } = this.props;
      this.setState({ nameOption: target.value })
      console.log(this.state.nameOption)
      handleOptionChange(this.state.nameOption);
  }

  render() {
    const { categories, optionSelected } = this.props;
    return (
      <div>
        <h2>Categorias</h2>
        <label>
          <input
            type="radio"
            name="categorias"
            value="all"
            checked={optionSelected === "all"}
            onChange={(event) => this.setState({ nameOption: event.target.value })}
          />
          All
        </label>
        {categories.map((category) => {
          const { id, name } = category;
          return (
            <label key={id}>
              <input
                type="radio"
                name="categorias"
                value={name}
                checked={optionSelected === name}
                onChange={(event) => this.handleOption(event)}
              />
              {name}
            </label>
          );
        })}
      </div>
    );
  }
}
