import React, { Component } from 'react';
class BemVindo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
            hora: '00:00:00'
        };
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar() {
        let state = this.state;
        state.contador += 1;
        this.setState(state);
    }

    diminuir() {
        let state = this.state;
        if (state.contador === 0) {
            alert("Opa, Chegou a Zero")
        } else {
            state.contador -= 1;
            this.setState(state);
        }
    }

    componentDidMount() { //AO FINALIZAR O CARREGAMENTO DA TELA EXECUTA
        setInterval(() => {
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 2000);
    }

    componentDidUpdate() {//SEMPRE QUE O STATE FOR ATUALIZADO EXECUTA
        //alert("Atualizou")
    }

    render() {
        return (
            <div>
                <h2>Bem Vindo(a) {this.props.nome}</h2>
                <hr />
                <h3>Contador</h3>
                <button onClick={this.diminuir}>-</button>
                    |   {this.state.contador}   |
                <button onClick={this.aumentar}>+</button>
                <hr />
                <h2>Hora atual</h2>
                <h1>{this.state.hora}</h1>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <center>
                <BemVindo nome="Addam" />
                <hr />
                <h1>Iniciando com React em 18/10/2020</h1>
                <hr />
            </center>
        </div>
    );
};

export default App;