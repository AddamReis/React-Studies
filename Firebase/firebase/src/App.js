import React, { Component } from 'react';
import firebase from 'firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenInput: '',
      idadeInput: '',
      nomeInput: '',
      token: 'Carregando...',
      nome: '',
      idade: ''
    };
    this.cadastrar = this.cadastrar.bind(this);
    
    let firebaseConfig = {
      apiKey: "AIzaSyCnd9SvA2Iz-Cr4Lno6VfksJevcGKPlYaE",
      authDomain: "webfirebase-b8a58.firebaseapp.com",
      databaseURL: "https://webfirebase-b8a58.firebaseio.com",
      projectId: "webfirebase-b8a58",
      storageBucket: "webfirebase-b8a58.appspot.com",
      messagingSenderId: "261712633482",
      appId: "1:261712633482:web:5986ebacc6598c4031d773"
    };

    if (!firebase.apps.length) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }

    /*on é o olheiro, fica verificando todos os dados do banco*/
    firebase.database().ref('Token').on('value', (snapshot) =>{
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });

    /*once visualiza apenas uma vez os valores no banco, não retorna valores atualizados*/
    /*firebase.database().ref('Token').once('value').then((snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });*/

    firebase.database().ref('Usuario').child(1).on('value', (snapshot) => {
      let state = this.state;
      state.nome = snapshot.val().nome;
      state.idade = snapshot.val().idade;
      this.setState(state);
    });
  }

  
  cadastrar(e){
    ///insere
    //firebase.database().ref('Token').set(this.state.tokenInput);
    
    //altera
    //firebase.database().ref('Usuario').child(1).child('idade').set(this.state.tokenInput);

    //se não ter a 'coluna' cargo, insere
    //firebase.database().ref('Usuario').child(1).child('cargo').set(this.state.tokenInput);

    //deletar
    //firebase.database().ref('Usuario').child(1).child('cargo').remove();

    //inserir dados em massa
    let usuario = firebase.database().ref('Usuario');
    let chave = usuario.push().key;

    usuario.child(chave).set({
      nome: this.state.nomeInput,
      idade: this.state.idadeInput
    });

    e.preventDefault();
  }

  render() {
    const { token, nome, idade } = this.state;
    return (
      <div>
        <form onSubmit={this.cadastrar}>

          <input type="text" value={this.state.tokenInput}
                onChange={(e)=> this.setState({tokenInput: e.target.value})} />
          <br/>
          <input type="text" value={this.state.idadeInput}
                onChange={(e)=> this.setState({idadeInput: e.target.value})} />
          <br/>
          <input type="text" value={this.state.nomeInput}
                onChange={(e)=> this.setState({nomeInput: e.target.value})} />
          <br/>
          <button type="submit">Cadastrar</button>
        </form>

        <h1>Token: {token}</h1>
        <h1>Nome: {nome}</h1>
        <h1>Idade: {idade}</h1>
      </div>
    );
  }
}
