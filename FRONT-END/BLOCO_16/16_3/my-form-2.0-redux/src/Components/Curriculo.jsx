import React from 'react';
import { connect } from 'react-redux';

class Curriculo extends React.Component {
    render() {
        const { info } = this.props;
        return (
          <div>
              <span>NOME: {info.nome}</span>
              <span>EMAIL: {info.email}</span>
              <span>CPF: {info.cpf}</span>
              <span>ENDEREÇO: {info.endereço}, {info.cidade}, {info.estado}</span>
              <span>RESUMO DO CURRÍCULO: {info.resumo}</span>
          </div>
        )
    }
}

const mapStateToProps = (state) => ({
  info: state.reducerAddData,
})

export default connect(mapStateToProps)(Curriculo);