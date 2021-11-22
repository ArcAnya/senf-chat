import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCyty3WLT0b9jffXS6Xkaucry8Q_98f0g8",
    authDomain: "senf-chat-72f9b.firebaseapp.com",
    projectId: "senf-chat-72f9b",
    storageBucket: "senf-chat-72f9b.appspot.com",
    messagingSenderId: "128505672641",
    appId: "1:128505672641:web:6aa5d1e4f6031e53f3f540"
}

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

const auth = getAuth(firebaseApp)

export {db, auth}