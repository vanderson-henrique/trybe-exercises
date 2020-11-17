import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };
  }


  // setState com dois parâmetros para que enquanto a requsição não foi concluída eu tenha loading true
  async fetchJoke() {
    this.setState(
      { loading: true },
      // Lógica do fetch para buscar as piadas da API
      // cabeçalho que a API exige para saber como será o retorno
      async () => {
        const requestHeaders = { headers: { Accept: "application/json" } };
        const requestReturn = await fetch("https://icanhazdadjoke.com/", requestHeaders); // requisição
        const requestObject = await requestReturn.json(); // transforma em json
        // armazena no estado (jokeObj) o objeto com a piada a cada requisição sobrepõe
        this.setState({
          loading: false,
          jokeObj: requestObject,
        });
      }
    );
  }

  componentDidMount() {
    // chama a função para que no fim da montagem já apareça uma piada na tela
    this.fetchJoke();
  }

  saveJoke() {
    //Salvando a piada nova no array existente no estado
    this.setState(({ storedJokes, jokeObj }) => ({
      storedJokes: [...storedJokes, jokeObj],
    }));

    this.fetchJoke();
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar Piada
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, jokeObj, loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (
            <p key={id}>{joke}</p>
          ))}
        </span>

        <span>{loading ? loadingElement : this.renderJokeElement()}</span>
      </div>
    );
  }
}

export default App;
