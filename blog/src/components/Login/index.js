import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        }
        this.entrar = this.entrar.bind(this);
        this.login = this.login.bind(this);
    }

    entrar(e) {
        e.preventDefault();
        this.login();
    }

    login = async () => {
        const { email, senha } = this.state;
        try {
            await firebase.login(email, senha)
                .catch((error) => {
                    if (error.code === 'auth/user-not-found') {
                        alert('Este usuário não existe');
                    } else {
                        alert('Código de erro: ' + error.code);
                        return null;
                    }
                })
                this.props.history.replace('/dashboard');
        } catch (e) {
            alert(e.message);
        }
    }

    componentDidMount(){
        //verifica se tem algum usuário logado
        if(firebase.getCurrent()){
            return this.props.history.replace('/dashboard')
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.entrar} id="login">
                    <label>E-mail:</label>
                    <input type="email" autoComplete="off" autoFocus
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                        placeholder="teste@teste.com" />
                    <br />
                    <label>Senha:</label>
                    <input type="password" autoComplete="off"
                        value={this.state.senha}
                        onChange={(e) => this.setState({ senha: e.target.value })}
                        placeholder="Sua senha" /> <br />
                    < br />
                    <button type="submit">Entrar</button>
                    <Link to="/register">Ainda não possui uma conta?</Link>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);