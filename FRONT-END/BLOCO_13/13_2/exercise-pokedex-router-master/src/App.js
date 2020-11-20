import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import pokemons from "./data";
import Pokedex from "./Pokedex";
import PokemonDetails from "./PokemonDetails";
import About from "./About";
import NotFound from "./NotFound";
import Favoritos from "./Favoritos";

class App extends React.Component {
  constructor() {
    super();
    this.changeValue = this.changeValue.bind(this);
    this.state = { isFavorite: false };
  }

  changeValue({ target }) {
    const { name, checked } = target;
    this.setState({ [name]: checked });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1> Pokedex </h1>
          <Link className="link-fix" to="/">
            Home
          </Link>
          <Link className="link-fix" to="/about">
            About
          </Link>
          <Link className="link-fix" to="/favoritos">
            Favoritos
          </Link>
          <Switch>
            <Route exact path="/">
              <Pokedex pokemons={pokemons} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/favoritos">
              <Favoritos />
            </Route>
            <Route
              path="/pokemons/:id"
              render={(props) => (
                <PokemonDetails {...props} onFavorite={this.changeValue} />
              )}
            />
            <Route>
              <NotFound path="" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
