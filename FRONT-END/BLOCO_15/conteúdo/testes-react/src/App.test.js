import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Testes na tela APP', () => {
  it('Verifica se possui o input Email', () => {
    // Selecionando o elemento a ser testado
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
  
    // Executando os testes
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  })
  
  // Verifica se existe apenas 1 botão na tela
  /* it('Verifica se existe um botão na tela', () => {
    const { getByRole } = render(<App />);
    const btn = getByRole('button');
  
    expect(btn).toBeInTheDocument();
  }) */
  
  // Verifica se possui 2 botões na tela
  it('Verifica se existem dois botões na tela', () => {
    const { getAllByRole } = render(<App />);
    const btn = getAllByRole('button');
  
    expect(btn.length).toBe(2);
  })
  
  it('Verifica se possui 1 botão enviar na tela(via testid)', () => {
    const { getByTestId } = render(<App />);
    const btn = getByTestId('id-send');
  
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveValue('Enviar');
  })
})

test('Verifica se ao clicar no Botão Enviar o email aparece na tela', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');

  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent('Valor: email@email.com');


})