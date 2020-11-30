import React from "react";
import * as api from "./api";
import Categorias from "./Categorias";

class Home extends React.Component {
  constructor() {
    super();

    this.fetchCategories = this.fetchCategories.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

    this.state = {
      categories: [],
      optionSelected: "all",
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    api.getCategories().then((categories) => {
      this.setState({ categories: categories });
    });
  }

  handleOptionChange(name) {
    this.setState({ optionSelected: name })
  }

  render() {
    console.log(this.state.categories);
    return (
      <div>
        <Categorias
          categories={this.state.categories}
          optionSelected={this.state.optionSelected}
          handleOptionChange={this.handleOptionChange}
        />
      </div>
    );
  }
}

export default Home;
