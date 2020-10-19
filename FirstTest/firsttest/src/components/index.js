import React, { Component } from 'react';

class Membro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: props.nome
        }
        this.entrar = this.entrar.bind(this);
    }

    entrar() {
        this.setState({nome: 'Addam'})
    }

    render() {
        return (
            <div>
                <center>
                    <h2>Bem Vindo(a) {this.state.nome}</h2>
                    <button onClick={this.entrar}>Entrar</button>
                    <br />
                    <button onClick={() => this.setState({nome: ''})}>Sair</button>
                </center>
            </div>
        )
    }
}

export default Membro;