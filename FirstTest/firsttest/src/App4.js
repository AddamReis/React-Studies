import React, { Component } from 'react';

class App4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            sexo: 'Masculinho'
        }
        this.alterarEmail = this.alterarEmail.bind(this);
        this.alterarSexo = this.alterarSexo.bind(this);
    }
    alterarEmail(e) {
        let valorDigitado = e.target.value;
        this.setState({ email: valorDigitado })
    }

    alterarSexo(e) {
        this.setState({ sexo: e.target.value })
    }

    render() {
        return (
            <div>
                <center><h1>Login</h1></center>
                Email..:
                <input type="email" name="email" value={this.state.email} onChange={this.alterarEmail} /> <br />
                Senha.:
                <input type="password" name="senha" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} /> <br />
                Sexo....:
                <select name="sexo" value={this.state.sexo} onChange={this.alterarSexo}>
                    <option>Masculino</option>
                    <option>Feminino</option>
                </select>
                <hr />
                <center><div>Retorno</div></center>
                <h6>Nome: {this.state.email}</h6>
                <h6>Senha: {this.state.senha}</h6>
                <h6>Sexo: {this.state.sexo}</h6>
            </div>
        );
    }
}

export default App4;