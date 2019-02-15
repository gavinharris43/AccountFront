import React, {Component} from 'react'
import { Button } from 'react-bootstrap';
import '../App.css';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			accNum: '',
			prize: 0
		}
	}
	render() {
		return(<div id = "loginBox">

				<h1>Account Creation</h1>
				<br/><br/>

				First Name: <input id = 'firstName' type = 'text' required/><br/><br/>
				Last Name: <input id = 'lastName' type = 'text' required/><br/><br/>
				QA Email: <input id = 'email' type = 'email' required/><br/><br/>
				Password: <input id = 'password' type = 'password' required/><br/><br/>
					Create a Cohort 
						Name: <input id ="name"/>
				<Button bsStyle="primary" onClick = {this.props.loginButtonClick}>Submit</Button>
				</div>);
	}
}

export default Login;
