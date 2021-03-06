import React, { Component } from 'react';
import firebase from './fireConnection';

export default class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            user: null
        };
        this.cadastrar = this.cadastrar.bind(this);
        this.logar = this.logar.bind(this);
        this.auth = this.auth.bind(this);
        this.sair = this.sair.bind(this);
    }

    componentDidMount() {
        this.auth()
    };

    sair(){
        firebase.auth().signOut().then(()=>{
            this.setState({user: null});
        });
    }

    auth() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
    }

    cadastrar(e) {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .catch((error) => {
                alert('Código do error: ' + error.code);
            });
    }

    logar(e) {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .catch((error) => {
                alert('Código do error: ' + error.code);
            });
    }

    render() {
        return (
            <div>
                {this.state.user ?
                    <div>
                        <p>Painel Admin</p>
                        <p>Seja Bem-Vindo :)</p>
                        <button onClick={this.sair}>Sair</button>
                    </div>
                    :
                    <div>
                        <center><label>Seja Bem-Vindo!</label></center>
                        <hr />
                        <lab>Email</lab>
                        <input type="text" value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })} />
                        <br />
                        <label>Senha</label>
                        <input type="password" value={this.state.senha}
                            onChange={(e) => this.setState({ senha: e.target.value })} />
                        <br />
                        <button onClick={this.cadastrar}>Cadastrar</button>
                        <button onClick={this.logar}>Logar</button>
                    </div>
                }
            </div>

        );
    }
}