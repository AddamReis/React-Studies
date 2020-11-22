import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import firebase from '../../firebase';
import './register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            nome: ''
        }
        this.register = this.register.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    register(e) {
        e.preventDefault();
        this.onRegister();
    }

    onRegister = async () => {
        try {
            const { nome, email, senha } = this.state;

            await firebase.register(email, senha, nome);
            this.props.history.replace('/dashboard');
            
        } catch (e) {
            alert(e.message);
        }
    }

    render() {
        return (
            <div>
                <h1 className="register-h1">Novo Registro</h1>
                <form onSubmit={this.register} id="register">
                    <label>Nome:</label>
                    <input type="text" autoComplete="off" autoFocus
                        value={this.state.nome}
                        onChange={(e) => this.setState({ nome: e.target.value })}
                        placeholder="Addam Reis" />
                    <br />
                    <label>E-mail:</label>
                    <input type="email" autoComplete="off"
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
                    <button type="submit">Registrar</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Register);