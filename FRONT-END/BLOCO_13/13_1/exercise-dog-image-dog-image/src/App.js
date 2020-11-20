import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.fetchDog = this.fetchDog.bind(this);
    this.saveImageDog = this.saveImageDog.bind(this);

    this.state = {
      imageDog: undefined,
      nameDog: "",
      loading: true,
      listImages: [],
    };
  }

  async fetchDog() {
    this.setState({ loading: true }, async () => {
      const requestReturn = await fetch(
        "https://dog.ceo/api/breeds/image/random"
      );
      const objectReturn = await requestReturn.json();
      this.setState({
        loading: false,
        imageDog: objectReturn,
      });
    });
  }

  componentDidMount() {
    if (localStorage.listDogs) {
      const parseStorage = JSON.parse(localStorage.listDogs);
      const lastDog = parseStorage[parseStorage.length - 1].url;
      return this.setState({ imageDog: { message: lastDog } });
    }

    this.fetchDog();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.imageDog) {
      const { message } = nextState.imageDog;
      if (message.includes("terrier")) return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    const { imageDog } = this.state;
    if (prevState.imageDog !== imageDog) {
      window.alert(
        `A raça deste doguinho é: ${imageDog.message.split("/")[4]}`
      );
    }
  }

  async saveImageDog() {
    await this.setState(({ imageDog, listImages, nameDog }) => ({
      listImages: [...listImages, { url: imageDog.message, nameDog }],
      nameDog: "",
    }));
    localStorage.setItem("listDogs", JSON.stringify(this.state.listImages));
  }

  render() {
    if (!this.state.imageDog) return "loading...";
    return (
      <div>
        <p>Novo doguinho</p>
        <button onClick={this.fetchDog}>Novo doguinho!</button>
        <label>
          {" "}
          Dê um nome ao doguinho
          <input
            type="text"
            name="nameDog"
            onChange={({ target }) => this.setState({ nameDog: target.value })}
          />
        </label>
        <button onClick={this.saveImageDog}>Salvar Dog</button>
        <div>
          <img src={this.state.imageDog.message} width="250px" height="250px" />
        </div>
      </div>
    );
  }
}

export default App;
