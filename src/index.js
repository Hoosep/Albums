import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './initializers/store';
import { Provider } from 'react-redux';
import firebase from './initializers/firebase';
import { setUser, clearUser } from './initializers/actions';

import * as serviceWorker from './serviceWorker';

firebase.auth().onAuthStateChanged( user => {
	if(user){
		store.dispatch(setUser(user));
	} else {
		store.dispatch(clearUser());
	}
});
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
