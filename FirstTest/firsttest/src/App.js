import React, { Component } from 'react';

class BemVindo extends Component {
    render() {
        return (
            <div>
                <h2>Bem Vindo(a) {this.props.nome}</h2>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <center>
                <BemVindo nome="Addam" />
                <br />
                <hr/>
                <h1>Iniciando com React em 18/10/2020</h1>
            </center>
        </div>
    );
};

export default App;