import firebase from 'firebase';
// Initialize Firebase
let config = {
	apiKey: "AIzaSyD4X_l9K7iZA7vQK7QEQVUFG56emmztHi0",
	authDomain: "albums-react-3326b.firebaseapp.com",
	databaseURL: "https://albums-react-3326b.firebaseio.com",
	projectId: "albums-react-3326b",
	storageBucket: "albums-react-3326b.appspot.com",
	messagingSenderId: "141180826030"
};
firebase.initializeApp(config);

export default firebase;