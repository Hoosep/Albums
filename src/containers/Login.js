import React, { Component, Fragment } from 'react';
import firebase from '../initializers/firebase';
import { connect } from 'react-redux';
import { saveToken, clearToken } from '../initializers/actions';
import AuthElements from '../components/AuthElements.js';

class Login extends Component{
	login = () => {
		let provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');

		firebase.auth().signInWithPopup(provider).then( result => {
			let token = result.credential.accessToken;
			this.props.saveToken(token);
		});
	}

	componentDidMount(){
		console.log(this.props.token);
	}

	logout = e => {
		firebase.auth().signOut().then( result => {
			this.props.clearToken();
		});
	}

	render(){
		return(
			<AuthElements
				login={this.login}
				logout={this.logout}
				token={this.props.token}
				user={this.props.user}/>
		);
	}
}

const mapStateToProps = state => {
	return {
		token: state.token,
		user: state.user
	}
}

const mapDispatchToProps = {
	saveToken,
	clearToken
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)