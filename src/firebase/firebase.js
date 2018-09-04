import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDK8DehH1-rOEjsncVwfg5LndOyfXfheFI',
  authDomain: 'react-redux-saga-c09cc.firebaseapp.com',
  databaseURL: 'https://react-redux-saga-c09cc.firebaseio.com',
  projectId: 'react-redux-saga-c09cc',
  storageBucket: 'react-redux-saga-c09cc.appspot.com',
  messagingSenderId: '141767411315',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
export { auth };
