import React from "react";
import App from "./App";
import { cleanup, fireEvent } from "@testing-library/react";
import renderWithRedux from "./helpers/renderWithRouter";

describe("Testes do app contador de clicks", () => {
  beforeEach(cleanup);
  test("se a página tem um botão e um texto 0", () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText("Clique aqui");

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText("0")).toBeInTheDocument();
  });

  test("se definindo um initialState como 5, este número é renderizado na tela", () => {
    const { queryByText } = renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 5 } },
    });

    expect(queryByText("5")).toBeInTheDocument();
  });

  test("se ao iniciar com 0 e o botão for clicado, o número é alterado para 1", () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdd = queryByText("Clique aqui");

    fireEvent.click(buttonAdd);
    expect(queryByText("1")).toBeInTheDocument();
  });

  test("se ao iniciar com 10 e o botão for clicado, o número é alterado para 11", () => {
    const { queryByText } = renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 10 } },
    });
    const buttonAdd = queryByText("Clique aqui");

    fireEvent.click(buttonAdd);
    expect(queryByText('11')).toBeInTheDocument();
  });
});
