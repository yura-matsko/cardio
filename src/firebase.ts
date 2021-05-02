import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD7NcEXBZmvswncyLn3FBbvTVir_aAV3AY',
    authDomain: 'cardio-d9071.firebaseapp.com',
    databaseURL: 'https://cardio-d9071-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'cardio-d9071',
    storageBucket: 'cardio-d9071.appspot.com',
    messagingSenderId: '573306289901',
    appId: '1:573306289901:web:30a4d6c904f49cae3d16e4',
    measurementId: 'G-XDC8N38GDH',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
