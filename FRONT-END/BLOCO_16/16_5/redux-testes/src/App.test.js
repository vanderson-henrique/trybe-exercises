import React from "react";
import App from './App';
import { cleanup, fireEvent } from "@testing-library/react";
import renderWithRedux from "./helpers/renderWithRedux";

describe('Testes do app que movimenta 3 carros', () => {
  test('se existem 3 botões na tela quando ela é renderizada', () => {
    const { getAllByText } = renderWithRedux(<App />);
    const buttons = getAllByText('move');
    
    expect(buttons.length).toBe(3);
  })

  test('se existe um carro vermelho na tela ao ser renderizado', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const redCar = getByTestId('red-img');

    expect(redCar).toBeDefined();
  })

  test('se existe um carro azul na tela ao ser renderizado', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const blueCar = getByTestId('blue-img');

    expect(blueCar).toBeDefined();
  })

})


