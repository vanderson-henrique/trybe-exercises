import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div data-testid="id-div-email-user">
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      <div>{(email ? <h3>{(verifyEmail(email) ? 'Email Valido' : 'Email Inválido')}</h3> : '')}
      </div>
    </div>
  );
};

export default ValidEmail;