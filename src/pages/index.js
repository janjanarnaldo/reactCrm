import React from 'react'
import Link, { navigateTo } from 'gatsby-link'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import RaisedButton from 'material-ui/RaisedButton'

import TextField from 'material-ui/TextField'

import injectTapEventPlugin from 'react-tap-event-plugin'

import _ from 'lodash'

injectTapEventPlugin()

const style = {
	color: `black`
}

/*
	Note: This is only valid for this test purpose
*/
const credential = {
	username: 'test',
	password: 'test'
}

function navigate(url) {
	navigateTo(url)
}

class myCrm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		}

		this.handleFormChange = this.handleFormChange.bind(this)
		this.checkLogin = this.checkLogin.bind(this)
	}

	handleFormChange = (event) => {
		const target = event.target
		const value = target.value
		const name = target.name

		this.setState({
			[name]: value
		})
	}

	checkLogin = (event) => {
		event.preventDefault();
		this.setState({_errorUsername: ``})
		this.setState({_errorPassword: ``})

		if( _.isEqual(credential.username, this.state.username) &&  _.isEqual(credential.password, this.state.password) ) {
			// localStorage.setItem('loggedIn', 'true');
			navigate('/contacts/')
		}
		else {
			if( !_.isEqual(this.state.username, credential.username) )
				this.setState({_errorUsername: `Incorrect`})
			if( !_.isEqual(this.state.password, credential.password) )
				this.setState({_errorPassword: `Incorrect`})
		}
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
				<div style={{ 'textAlign': `center` }}>
					<form role="form" className='form'>
						<TextField floatingLabelText="Username"
							errorText={this.state._errorUsername}
							name="username" 
							value={this.state.username}
							onChange={this.handleFormChange} />
						<br/>

						<TextField floatingLabelText="Password"
							errorText={this.state._errorPassword}
							name="password" 
							value={this.state.password}
							onChange={this.handleFormChange}
							type="password" />
						<br/>
						<RaisedButton label="Login" primary={true} onClick={this.checkLogin}/>
					</form>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default myCrm