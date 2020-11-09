import React, { Component } from 'react';
import firebase from 'firebase';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: 'Carregando...',
      nome: '',
      idade: ''
    };

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
    /*firebase.database().ref('Token').on('value', (snapshot) =>{
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });*/

    /*once visualiza apenas uma vez os valores no banco, não retorna valores atualizados*/
    firebase.database().ref('Token').once('value').then((snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });

    firebase.database().ref('Usuario').child(1).on('value', (snapshot) => {
      let state = this.state;
      state.nome = snapshot.val().nome;
      state.idade = snapshot.val().idade;
      this.setState(state);
    });

  }

  render() {
    const { token, nome, idade } = this.state;
    return (
      <div>
        <h1>Token: {token}</h1>
        <h1>Nome: {nome}</h1>
        <h1>Idade: {idade}</h1>
      </div>
    );
  }
}
