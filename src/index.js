import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';

firebaseApp.auth().onAuthStateChanged((user) => {
	if (user) {
		browserHistory.push('/app');
	} else {
		browserHistory.replace('/sign-in');
	}
});

ReactDOM.render(
	<Router path="/" history={browserHistory}>
		<Route path="/app" component={App} />
		<Route path="/sign-in" component={SignIn} />
		<Route path="/sign-up" component={SignUp} />
	</Router>,
	document.getElementById('root'));
