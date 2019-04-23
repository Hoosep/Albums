import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Login from '../containers/Login';

class AppNav extends Component{
	render(){
		const { classes } = this.props;
		return(
			<div>
				<AppBar position="static">
					<Toolbar>
						<Typography 
							variant="h6"
							component="h1"
							className={classes.webName}>Albums</Typography>
        				<Login/>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles({
	webName:{
		flexGrow:1,
		textAlign:'left',
		color:'#FFF'
	}
})(AppNav);