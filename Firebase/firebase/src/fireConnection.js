import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

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

export default firebase;