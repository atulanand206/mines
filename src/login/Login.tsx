import React from 'react';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames/bind';
import './Login.scss';
import Logo from './../mines/Header/Logo';
import { authenticationSvc } from '../_services/authenticationSvc';

interface State {
	loginPage: boolean;
	formError: boolean;
	loggedIn: boolean;
	username: string;
	password: string;
	rePassword: string;
	email: string;
}

interface Props {

}

class Login extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = { 
			loginPage: true, 
			formError: false,
			loggedIn: false,
			username: '',
			password: '',
			rePassword: '',
			email: ''
		};
		authenticationSvc.clear();
	}

	change(event: React.ChangeEvent<HTMLInputElement>, type: string) {
		this.setState({formError: false})
		switch(type) {
			case 'username': this.setState({username: event.target.value}); break;
			case 'password': this.setState({password: event.target.value}); break;
			case 'rePassword': this.setState({rePassword: event.target.value}); break;
			case 'email': this.setState({email: event.target.value}); break;
		}
	}

	handle(event: React.MouseEvent<HTMLParagraphElement, MouseEvent>, loginPage: boolean) {
		event.preventDefault();
		if (loginPage === false) {
			authenticationSvc.authorize({username: this.state.username, password:this.state.password})
			.then((res) => {
				if (res.status === 500) {
					this.setState({formError: true})
				}
				if (res.status === 200) {
					this.setState({loggedIn: true})
				}
			});
		}
	}

	takeAction(loginPage: boolean) {
		this.setState({ loginPage: loginPage, formError: false });
	}

	render() {
		const loggedIn = this.state.loggedIn;
		if (loggedIn) {
			return <Redirect to='/match' />
		}
		const login = this.state.loginPage;
		const signup = !this.state.loginPage;
		const error = this.state.formError;
		return (
			<div className='login-page'>
				<div className='login-page-logo'>
					<Logo />
				</div>
				<div className='login-form-container'>
					<form className={classNames(
						'form form-login',
						signup && 'form__hidden')}>
						<label className='form-input-label'>Username</label>
						<input type='text' placeholder='Username' autoComplete='username' aria-label='username' onChange={(e) => this.change(e, 'username')}/>
						<label className='form-input-label'>Password</label>
						<input type='password' placeholder='Password' autoComplete='current-password' aria-label='password' onChange={(e) => this.change(e, 'password')} />
						<p className={classNames(
							!error && 'form-error-message__hidden', 
							error && 'form-error-message')}>Invalid credentials</p>
						<input type='submit' className='action-button' value='Login' onClick={(e) => this.handle(e, false)} />
						<p className={classNames('sub-action-button')} onClick={() => this.takeAction(false)} >Let's create a new account</p>
					</form>
					<form className={classNames(
						'form form-sign-up',
						login && 'form__hidden')}>
						<label className='form-input-label'>Username</label>
						<input type='text' placeholder='Set username' autoComplete='username' aria-label='username' onChange={(e) => this.change(e, 'username')} />
						<label className='form-input-label'>Email Address</label>
						<input type='email' placeholder='Set email address' autoComplete='username' aria-label='email' onChange={(e) => this.change(e, 'email')} />
						<label className='form-input-label'>Password</label>
						<input type='password' placeholder='Set password' autoComplete='new-password' aria-label='password' onChange={(e) => this.change(e, 'password')} />
						<label className='form-input-label'>Re enter password</label>
						<input type='password' placeholder='Confirm password' autoComplete='new-password' aria-label='password' onChange={(e) => this.change(e, 'rePassword')} />
						<input type='submit' className='action-button' value='Sign Up' onClick={(e) => this.handle(e, true)} />
						<p className={classNames('sub-action-button')} onClick={() => this.takeAction(true)} >I already have an account</p>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;