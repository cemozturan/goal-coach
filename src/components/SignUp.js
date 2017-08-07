import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: {
				message: ''
			}
		}
		this.signUp = this.signUp.bind(this);
	}

	signUp() {
		const { email, password } = this.state;
		firebaseApp.auth().createUserWithEmailAndPassword(email, password)
			.catch((error) => {
				this.setState(() => {
					return {
						error
					};
				});
			});
	}

  	render() {
    	return (
      		<div className="form-inline" style={{margin: '5%'}}>
				<h2>Sign Up</h2>
				<div className="form-group">
					<input
						className="form-control"
						type="text"
						placeholder="email"
						style={{marginRight: '5%'}}
						onChange={(event) => this.setState({email: event.target.value})}
					/>
					<input
						className="form-control"
						type="text"
						placeholder="password"
						style={{marginRight: '5%'}}
						onChange={(event) => this.setState({password: event.target.value})}
					/>
					<button
						className="btn btn-primary"
						type="button"
						onClick={this.signUp}
					>
						Sign Up
					</button>
				</div>
				<div>{this.state.error.message}</div>
				<div><Link to="/sign-in">Sign In</Link></div>
			</div>
    	);
  	}
}

export default SignUp;
