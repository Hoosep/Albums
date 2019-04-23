import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { withStyles } from '@material-ui/core/styles';

const AuthElements =  function(props){
	const { classes, logout,
			login, user, token } = props;

	const loginButton = () => {
		if(user){
			const { photoURL: avatar } = user;
			return (
				<Fragment>
					<Avatar src={avatar} className={classes.mr1}/>
					<IconButton onClick={logout} className={classes.textWhite}>
						<ExitToApp/>
					</IconButton>
				</Fragment>
			)
		}

		return (
			<Button 
      			variant="contained"
      			onClick={login}
      			>Iniciar sesión con Google</Button>
		);
	}

	return(
		<div className={classes.container}>
			<p>{token}</p>
      		{loginButton()}
		</div>
	);
}

export default withStyles({
	container:{
		display:'flex',
		flexDirection:'row'
	},
	mr1:{
		marginRight:'1rem'
	},
	textWhite:{
		color:'#FFF'
	}
})(AuthElements)