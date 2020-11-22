import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyA--C_gd7Z74FIEJ7yryItOAYebqDFJ8w8",
    authDomain: "blog-eb4bd.firebaseapp.com",
    databaseURL: "https://blog-eb4bd.firebaseio.com",
    projectId: "blog-eb4bd",
    storageBucket: "blog-eb4bd.appspot.com",
    messagingSenderId: "137249969441",
    appId: "1:137249969441:web:b75c701fbfe4397964da60",
    measurementId: "G-L0FEBP1X3C"
  };

  //if (!firebase.apps.length) {
    // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);

class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);

        this.app = app.database();
    }

    login(email, senha){
        return app.auth().signInWithEmailAndPassword(email, senha)
    }

    logout(){
        return app.auth().signOut();
    }

    async register(email, senha, nome){
        await app.auth().createUserWithEmailAndPassword(email, senha)

        const uid = app.auth().currentUser.uid;

        return app.database().ref('Users').child(uid).set({
            name: nome
        })
    }

    isInitialized(){
        return new Promise(resolve =>{
            app.auth().onAuthStateChanged(resolve)
        })
    }

    getCurrent(){
        return app.auth().currentUser && app.auth().currentUser.email;
    }

    async getUserName(callback){
        if(!app.auth().currentUser){
            return null;
        }
        const uid = app.auth().currentUser.uid;
        await app.database().ref('Users').child(uid)
        .once('value').then(callback);
    }
}

export default new Firebase();