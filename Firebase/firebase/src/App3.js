import React, { Component } from 'react';
import firebase from './fireConnection';

export default class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };
        this.logar = this.logar.bind(this);
        this.sair = this.sair.bind(this);

        firebase.auth().onAuthStateChanged((user) => {
            if(user)
                alert('Usuário Logado! \n Email: ' + user.email);
        });
    }

    logar(e){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then()
        .catch((error) =>{
            if( error.code === 'auth/invalid-email'){
                alert('Email inválido!');
            }
            else if(error.code === 'auth/weak-password'){
                alert('Senha fraca!');
            }
            else if(error.code === 'auth/wrong-password'){
                alert('Senha fraca!');
            }
            else{
                alert('Código do error: ' + error.code);
            }
        })

        e.preventDefault();
    }

    sair(){
        firebase.auth().signOut();
        alert('Deslogado com sucesso!');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.logar}>
                    <lab>Email</lab>
                    <input type="text" value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })} />
                    <br />
                    <label>Senha</label>
                    <input type="password" value={this.state.senha}
                        onChange={(e) => this.setState({ senha: e.target.value })} />
                    <br/>
                    <button type="submit">Logar</button>    
                </form>
                <button onClick={this.sair}>Sair</button>
            </div>
        );
    }
}