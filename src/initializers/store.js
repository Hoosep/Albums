import { createStore, combineReducers, compose } from 'redux';
import persistState from 'redux-localstorage';

function tokenReducer(state='', action){
	switch(action.type){
		case 'SET_TOKEN':
			return action.token;
		case 'CLEAR_TOKEN':
			return action.token;
		default:
			return state;
	}
}

function userReducer(state=null, action){
	switch(action.type){
		case 'LOGGED_IN':
			return action.user;
		case 'SIGN_OUT':
			return null;
		default:
			return state;
	}
}

let rootReducer = combineReducers({
	token: tokenReducer,
	user: userReducer
});


export default createStore(
	rootReducer,
	{},
	compose(
		persistState('token'),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);