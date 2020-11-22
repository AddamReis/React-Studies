import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import firebase from '../../firebase';
import './new.css';

class New extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descricao: '',
            image: '',
            titulo: '',
            alert: ''
        }
        this.cadastrar = this.cadastrar.bind(this);
    }

    componentDidMount() {
        //verifica se tem algum usuário logado
        if (!firebase.getCurrent()) {
            this.props.history.replace('/');
            return null;
        }
    }

    cadastrar = async (e) => {
        e.preventDefault();

        if (this.state.titulo !== ''
            && this.state.image !== ''
            && this.state.descricao !== '') {

            let posts = firebase.app.ref('Posts');
            let chave = posts.push().key;
            await posts.child(chave).set({
                titulo: this.state.titulo,
                image: this.state.image,
                descricao: this.state.descricao,
                autor: localStorage.nome
            });
            this.props.history.push('/dashboard');
        } else {
            this.setState({ alert: 'Preencha todos os campos!' })
        }
    }

    render() {
        return (
            <div>
                <header id="new">
                    <Link to="/dashboard">Voltar</Link>
                </header>

                <form onSubmit={this.cadastrar} id="new-post">
                    <span>{this.state.alert}</span>
                    <label>Titulo:</label><br />
                    <input type="text"
                        placeholder="nome do post" value={this.state.titulo}
                        onChange={(e) => this.setState({ titulo: e.target.value })} />
                    <br />

                    <label>Url da imagem:</label><br />
                    <input type="text"
                        placeholder="Url da capa" value={this.state.image}
                        onChange={(e) => this.setState({ image: e.target.value })} />
                    <br />

                    <label>Descrição:</label><br />
                    <textarea type="text"
                        placeholder="Descrição do post..." value={this.state.descricao}
                        onChange={(e) => this.setState({ descricao: e.target.value })} />
                    <br />

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default withRouter(New);