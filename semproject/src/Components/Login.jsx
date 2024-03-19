import React, { useState } from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      setIsFormValid(false);
      setEmailError('Invalid email address');
      return;
    } else {
      setEmailError('');
    }

    if (validator.isEmpty(password)) {
      setIsFormValid(false);
      return;
    }

    if (password !== confirmPassword) {
      setIsFormValid(false);
      return;
    }

    setIsLoginSuccessful(true);

    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsFormValid(true);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor:'#EEA5A6',padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login in to your account</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '25px' }}>
            <label htmlFor="email"  style={{ fontSize: '0.875rem', fontWeight: '600', color: '#333' }}>Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="current-email"
              required
              value={FormData.email}
              onChange={handleEmailChange}
              style={{ width:'90%',padding:'10px', borderRadius: '10px' }}
            />
            {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label htmlFor="password" style={{ fontSize: '0.875rem', fontWeight: '600', color: '#333' }}>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={FormData.password}
              onChange={handlePasswordChange}
              style={{ width:'90%',padding:'10px', borderRadius: '10px' }}
            />
          </div>

          

          <button
            to="/admin"
            style={{
              display: 'block',
              width: '100%',
              padding: '10px',
              backgroundColor: '#9B4444',
              color: '#fff',
              borderRadius: '20px',
              textAlign: 'center',
              textDecoration: 'none',
              
            }}
          >
            Sign in
          </button>
          <div style={{ marginBottom: '15px' }}>
            <p className='txt'>Donot have an account?<Link to="/signup" style={{color:'#9B4444'}}>Signup</Link></p>
            {password !== confirmPassword && <div style={{ color: 'red' }}>Passwords do not match</div>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;