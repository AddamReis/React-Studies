import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Erro extends Component {
    render() {
        return (
            <div>
                <center>
                    <h1>Página não encontrada</h1>
                    <h3>Você está procurando por? </h3>
                    <Link to="/">Home</Link> <br/> 
                    <Link to="/sobre">Sobre</Link>
                </center>
            </div>
        );
    }
}

export default Erro;