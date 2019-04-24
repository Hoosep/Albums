export const saveToken = (token) => {
	return {
		type: 'SET_TOKEN',
		token: token
	}
}

export const clearToken = () => {
	return {
		type: 'CLEAR_TOKEN',
		token: ''
	}
}

export const setUser = user => {
	return {
		type: 'LOGGED_IN',
		user: user
	}
}

export const clearUser = () => {
	return {
		type: 'SIGN_OUT'
	}
}

export const setAlbums = albums => {
	return {
		type: 'SET_ALBUMS',
		albums: albums
	}
}

export const clearAlbums = () => {
	return {
		type: 'CLEAR_ALBUMS'
	}
}