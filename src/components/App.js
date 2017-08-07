import React, { Component } from 'react';
import '../styles/App.css';
import { firebaseApp } from '../firebase';

class App extends Component {
	signOut() {
		firebaseApp.auth().signOut();
	}
  	render() {
    	return (
      		<div className="App">
				Hello world
				<button
					className="btn btn-danger"
					onClick={() => this.signOut()}
				>
					Sign out
				</button>
			</div>
    	);
  	}
}

export default App;
