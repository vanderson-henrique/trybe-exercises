import React from 'react';

class Curriculo extends React.Component {
    render() {
        return (
            <div>{this.props.estados.nome}</div>
        )
    }
}

export default Curriculo;