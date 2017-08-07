import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';

firebaseApp.auth().onAuthStateChanged((user) => {
	if (user) {
		console.log('A user has signed in or up', user);
	} else {
		console.log('A user needs to sign in or has just signed out');
	}
});

ReactDOM.render(
	<Router path="/" history={browserHistory}>
		<Route path="/app" component={App} />
		<Route path="/sign-in" component={SignIn} />
		<Route path="/sign-up" component={SignUp} />
	</Router>,
	document.getElementById('root'));
