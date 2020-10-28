import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../style/style.css'

class Filme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filme: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                this.setState({ filme: json });
                //console.log(json);
            })

    }

    render() {
        return (
            <div className="filmeinfo">
                <h1>{this.state.filme.nome}</h1>
                <img src={this.state.filme.foto} />
                {this.state.filme.length !== 0 && <h3>Sinopse</h3>}
                {this.state.filme.sinopse}
                {this.state.filme.length !== 0 && <Link to="/">Voltar</Link>}
            </div>
        );
    }
}

export default Filme;