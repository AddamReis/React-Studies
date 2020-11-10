import React, { Component } from 'react';
import firebase from 'firebase';

export default class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: [],
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

        firebase.database().ref('Usuario').on('value', (snapshot) => {
            let state = this.state;
            state.lista = [];

            snapshot.forEach((childItem) => {
                state.lista.push({
                    key: childItem.key,
                    nome: childItem.val().nome,
                    idade: childItem.val().idade
                });
            });
            this.setState(state);
        });
    }


    render() {
        return (
            <div>
                {this.state.lista.map((item) => {
                    return (
                        <div>
                            <h1>Olá {item.nome}</h1>
                            <h1> você tem {item.idade} anos</h1>
                            <h1>sua chave é {item.key}</h1>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        );
    }
}
