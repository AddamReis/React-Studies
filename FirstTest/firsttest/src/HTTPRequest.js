import React, { Component } from 'react';
import './style.css'

class HTTPRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nutri: []
        };
    }

    componentDidMount() {
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

        fetch(url)
        .then((r)=> r.json())
        .then((json)=>{
            let state = this.state;
            state.nutri = json;
            this.setState(state);
            console.log(json);
        })

    }

    render() {
        return (
            <div className="container basic">
                <header className="header">
                    <strong>React Nutri</strong>
                </header>
                {this.state.nutri.map((item)=> {
                    return(
                        <article key={item.id} className="post basic">
                            <strong className="titulo">{item.titulo}</strong>
                            <img src={item.capa} className="capa"/>
                            <p className="subtitulo">{item.subtitulo}</p>
                            <a className="botao basic" href="#">Acessar</a>
                        </article>
                    )
                })}
            </div>
        );
    }
}

export default HTTPRequest;