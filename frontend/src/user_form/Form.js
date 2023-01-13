import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { signup } from './insert';

export const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })
    const { name, email, password,error,success } = values;

    const handlechange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const clicksubmit = (event) => {
        // console.log('hiii');
        event.preventDefault();
        setValues({ ...values, error: false });
        // console.log(values);
        signup({ name, email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    password: '',
                    error: '',
                    success: true
                });
            }
        });
    }
    const signUpForm = () => (
        <form>
            <div className='container'>
            <div className='row col-md-6'>
            <div className="form-group mt-5">
                <label className="text-muted">Name</label>
                <input type="text" onChange={handlechange('name')} className="form-control" required/>
            </div>
            <div className="form-group mt-3">
                <label className="text-muted">Email</label>
                <input type="email" onChange={handlechange('email')} className="form-control" />
            </div>
            <div className="form-group mt-3">
                <label className="text-muted">Password</label>
                <input type="Password" onChange={handlechange('password')} className="form-control" />
            </div>
            <button className="btn btn-primary mt-3"  onClick={clicksubmit}>SignUp</button>
            </div>
            </div>
        </form>
    )

    const showError = () => (
        <div className="alert alert-danger mt-3" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info mt-3" style={{ display: success ? '' : 'none' }}>
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );
    return (
        <div>
            {showSuccess()}
                {showError()}
            {signUpForm()}
            {/* <Layout title="Signup Page" description="this is signup page" className="container  col-md-8 offset-md-2">
                {showSuccess()}
                {showError()}
                {signUpForm()}
            </Layout> */}
        </div>
    );
}
export default Signup;

