import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBHd56j02XZWEiF6JgVd6g0sWzSTQR5ocs",
    authDomain: "react-crown-db-d8f35.firebaseapp.com",
    projectId: "react-crown-db-d8f35",
    storageBucket: "react-crown-db-d8f35.appspot.com",
    messagingSenderId: "406110147810",
    appId: "1:406110147810:web:287b1cf788e683e3dbfabb"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
