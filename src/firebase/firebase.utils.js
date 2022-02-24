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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return; //Aka on sign out don't do anything
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {  //We will make a new user
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
