import React from 'react';
import { getByText, render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido', () => {
    const USER_EMAIL = 'email@email.com';
    const { getByText } = render(<ValidEmail email={USER_EMAIL} />);
    const isValid = getByText('Email Valido');

    expect(isValid).toBeInTheDocument();
})

test('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isValid = getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

test('Testando se a tela se inicia com a verificação do email em branco', () => {
    const { getByTestId } = render(<ValidEmail />);
    const message = getByTestId('id-div-email-user');

    expect(message).not.toHaveValue('Email Invalid');
})