import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyClbh3LIeqBbPbvbeH7SNnzkGOcYTYgn1Q",
  authDomain: "fecapstone-d2973.firebaseapp.com",
  databaseURL: "https://fecapstone-d2973.firebaseio.com",
  projectId: "fecapstone-d2973",
  storageBucket: "fecapstone-d2973.appspot.com",
  messagingSenderId: "812998634896",
  appId: "1:812998634896:web:6df19760feb316f8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
