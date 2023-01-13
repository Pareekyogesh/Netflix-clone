import React, { useState } from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom';
import './Login.css';
import { signin,authenticate } from '../../user_form/insert';

const Login = () => {
	// const navigate =  useNavigate();
	const [values, setValues] = useState({
		username: "",
		password: "",
		error: "",
		redirectToReferrer: false
	});
    const { username, password,error,redirectToReferrer } = values;

	const handlechange = name => event => {
		setValues({ ...values, error: false, [name]: event.target.value });
	}
	const clicksubmit = (event) => {
		event.preventDefault();
		setValues({ ...values, error: false });
		signin({ username, password }).then(data => {
			if (data.error) {
				setValues({ ...values, error: data.error });
			} else {
				authenticate(data,()=>{
				setValues({
					...values,
					redirectToReferrer: true
					});
				})
			}
		});
	}
	const signInForm = () => (
		<div className="login-page">
			<div className="form">
				<div className="login">
					<div className="login-header">
						<h3>LOGIN</h3>
						<p>Please enter your login Detail's.</p>
					</div>
				</div>
				<form className="login-form" method='post'>
					<input type="text" placeholder="Username" onChange={handlechange('username')} id='uname' />
					<input type="password" placeholder="password" onChange={handlechange('password')} id='pass' />
					<button onClick={clicksubmit}>
						login
					</button>
					<p>
						<div className="message">Not registered?
							<Link to="/signin">Create an account</Link>
						</div>
					</p>

				</form>
			</div>
		</div>
	);
	const showError = () => (
		<div className="alert alert-danger mt-3" style={{ display: error ? '' : 'none' }}>
			{error}
		</div>
	);
	const redirectUser = () => {
		if (redirectToReferrer) {
			// window.location.href('/');
			return <Navigate to="/" />
			// navigate('/');
			// history.push('/');
		}
	}
	return (
		<div>
			{showError()}
			{signInForm()}
			{redirectUser()}

		</div>
	);
}

export default Login




