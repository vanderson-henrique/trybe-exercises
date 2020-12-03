import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import renderWithRouter from "./renderWithRouter";
import App from "./App";

describe("Testes da aplicação toda", () => {
  it("Deve renderizar o componente App", () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText("Você está na página Início");
    expect(home).toBeInTheDocument();
  });

  it("Deve renderizar o componente Sobre", () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText("Sobre"));
    const { pathname } = history.location;
    expect(pathname).toBe("/about");
    const aboutAll = getByText("Você está na página Sobre");
    expect(aboutAll).toBeInTheDocument();
  });

  it('Deve testar se ao digitar um endereço incorreto existe a renderização do Not Found', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/paginaxablau');
    const noMatch = getByText('Página não encontrada');
    expect(noMatch).toBeInTheDocument();
  })

});
