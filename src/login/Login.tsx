import React from 'react';
import classNames from 'classnames/bind';
import './Login.scss';
import Logo from './../mines/Header/Logo';

interface State {
	loginPage: boolean;
}

interface Props {

}

class Login extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = { loginPage: true };
	}

	takeAction(loginPage: boolean) {
		console.log(loginPage);
		this.setState({ loginPage: loginPage });
	}

	render() {
		const login = this.state.loginPage;
		const signup = !this.state.loginPage;
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
						<input type='text' placeholder='Username' aria-label='username' />
						<label className='form-input-label'>Password</label>
						<input type='password' placeholder='Password' aria-label='password' />
						<input type='submit' className='action-button' value='Login' />
						<p className={classNames('sub-action-button')} onClick={() => this.takeAction(false)} >Let's create a new account</p>
					</form>
					<form className={classNames(
						'form form-sign-up',
						login && 'form__hidden')}>
						<label className='form-input-label'>Username</label>
						<input type='text' placeholder='Set username' aria-label='username' />
						<label className='form-input-label'>Email Address</label>
						<input type='email' placeholder='Set email address' aria-label='email' />
						<label className='form-input-label'>Password</label>
						<input type='password' placeholder='Set password' aria-label='password' />
						<label className='form-input-label'>Re enter password</label>
						<input type='password' placeholder='Confirm password' aria-label='password' />
						<input type='submit' className='action-button' value='Sign Up' />
						<p className={classNames('sub-action-button')} onClick={() => this.takeAction(true)} >I already have an account</p>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;