import React, { Component } from 'react';
import firebase from './fireConnection';

export default class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            nome: ''
        };
        this.cadastrar = this.cadastrar.bind(this);

        firebase.auth().signOut();

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('usuarios').child(user.uid).set({
                    nome: this.state.nome
                })
                .then(()=>{
                    this.setState({nome: '', email: '', senha: ''});
                })
                alert('Usuário Cadastrado! \n Email: ' + user.email);  
            }
            //alert('Usuário Logado! \n Email: ' + user.email);
        })
    }

    cadastrar(e) {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .catch((error) => {
                alert('Código do error: ' + error.code);
            })

        e.preventDefault();
    }

    render() {
        return (
            <div>
                <center><label>Novo usuário</label></center>
                <hr />
                <form onSubmit={(e)=> {this.cadastrar(e)}}>
                    <lab>Nome</lab>
                    <input type="text" value={this.state.nome}
                        onChange={(e) => this.setState({ nome: e.target.value })} />
                    <br />
                    <lab>Email</lab>
                    <input type="text" value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })} />
                    <br />
                    <label>Senha</label>
                    <input type="password" value={this.state.senha}
                        onChange={(e) => this.setState({ senha: e.target.value })} />
                    <br />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}