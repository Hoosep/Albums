import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
//Redux
import { setAlbums, clearAlbums } from '../initializers/actions';
//Components
import AlbumList from '../components/AlbumList';

class Albums extends Component {
	componentDidMount(){
		//this.loadPhotos();
		if(process.env.NODE_ENV == 'production'){
			this.loadPhotos();
		} else {
			import('../data/albums').then( module => {
				this.props.setAlbums(module.default.albums);
			});
		}
	}

	loadPhotos = () => {
		axios({
			headers: {
				'Authorization': `Bearer ${this.props.token}`
			},
			url: 'https://photoslibrary.googleapis.com/v1/albums',
			method: 'GET'
		}).then(console.log).catch(console.log);
	}

	render(){
		return (
			<AlbumList albums={this.props.albums}/>
		);
	}
}

const mapStateToProps = state => ({
	albums: state.albums,
	token: state.token
})

const mapDispatchToProps = {
	setAlbums,
	clearAlbums
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums)