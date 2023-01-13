import React, { Component } from 'react'
import './Signin.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { signup } from '../../user_form/insert';





const Signin = () => {
  const [values, setValues] = useState({
    username: '',
    gender: '',
    mobile_no: '',
    password: '',
    confirm_pass: '',
    error: '',
    success: false
  })
  const { username, gender, mobile_no, password, confirm_pass, error, success } = values;

  const handlechange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  }

  const clicksubmit = (event) => {
    console.log(values);
    event.preventDefault();
    if (values.password === values.confirm_pass) {
      if (values.username && values.confirm_pass && values.mobile_no && values.gender) {
        setValues({ ...values, error: false });
        signup({ username, password, gender, mobile_no }).then(data => {
          if (data.err) {
            setValues({ ...values, error: data.err, success: false });
          } else {
            setValues({
              ...values,
              // username: '',
              // gender: '',
              // mobile_no: '',
              // password: '',
              // confirm_pass: '',
              // error: '',
              success: true
            });
          }
        });
      }
      else {
        setValues({ ...values, error: 'All fields are mandatory,please fill it!', success: false });
      }
    }
    else {
      setValues({ ...values, error: 'password and confirm password must be same', success: false });
    }
  }

  const signUpForm = () => (
    <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>SIGNIN</h3>
            <p>Please enter your Personal Detail's.</p>
          </div>
        </div>
        <form className="login-form">
          <input type="text" placeholder="Username" onChange={handlechange('username')} id='uname' />
          <input type="password" placeholder="password" onChange={handlechange('password')} id='pass' />
          <input type="password" placeholder='Confirm Password' onChange={handlechange('confirm_pass')} id='cpass' />
          <input type="text" minLength={10} maxLength={10} placeholder='Mobile Number' onChange={handlechange('mobile_no')} id='cno' />
          <div className='radio' id='rbtn'>
            Gender :
            <input type="radio" name='gender' id='rbtn' value={'male'} onChange={handlechange('gender')} />Male
            <input type="radio" name='gender' id='rbtn' value={'female'} onChange={handlechange('gender')} />Female
          </div>
          <button id='btn' onClick={clicksubmit}>Sign-In</button>
        </form>
      </div>
    </div>
  )
  const showError = () => (
    // <div className="row justify-content-center  col-md-3 ">
    <div className="alert alert-danger mt-3 col-md-3" style={{ display: error ? '' : 'none' }}>
      {error}
    </div>
    // </div>
  );

  const showSuccess = () => (
    <div className="alert alert-info mt-3 col-md-3" style={{ display: success ? '' : 'none' }}>
      New account is created. Please <Link to="/login">Signin</Link>
    </div>
  );
  return (
    <div>
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </div>
  )
}

export default Signin