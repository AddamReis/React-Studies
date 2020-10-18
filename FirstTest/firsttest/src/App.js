import React from 'react';

const BemVindo = (props) => {
    return (
        <div>
            <h2>Bem Vindo(a) {props.nome}</h2>
        </div>
    );
}

function App() {
    return (
        <div>
            <center>
                <BemVindo nome="Addam"/>
                <br />
                <h1>Iniciando com React em 18/10/2020</h1>
            </center>
        </div>
    );
};

export default App;