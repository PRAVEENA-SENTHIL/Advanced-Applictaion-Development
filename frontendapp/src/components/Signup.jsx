import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [phone, setPhone] = useState(true);
  const nav = useNavigate();
  const [isFormValid, setIsFormValid] = useState(true);
  const [emailError, setEmailError] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateForm();
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    validateForm();
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    validateForm();
  };
  const validateForm = () => {
    // Reset form validation
    setIsFormValid(true);
    setEmailError('');

    if (!validator.isEmail(email)) {
      setIsFormValid(false);
      setEmailError('Invalid email address');
    }

    if (validator.isEmpty(password)) {
      setIsFormValid(false);
    }

    if (!validator.isNumeric(phone)) {
      setIsFormValid(false);
    }

    if(validator.isEmpty(username))
    {
      setIsFormValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateForm();

    if (isFormValid) {
      nav('/login');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '0 20px' }}>
      <div style={{ maxWidth: '400px', width: '100%', backgroundColor: '#B5C0D0', padding: '40px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Sign up to your account</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label htmlFor="username" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333' }}>Full name</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="current-username"
              required
              value={username}
              onChange={handleUserNameChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {!isFormValid && <p style={{ color: 'red', fontSize: '0.875rem' }}>UserName Error</p>}
          </div>
          <div>
            <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333' }}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="current-email"
              required
              value={email}
              onChange={handleEmailChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {!isFormValid && emailError &&  <p style={{ color: 'red', fontSize: '0.875rem' }}>Email error</p>}
          </div>
          <div>
            <label htmlFor="phone" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333' }}>Phone Number</label>
            <input
              id="phno"
              name="phno"
              type="text"
              autoComplete="current-no"
              required
              value={phone}
              onChange={handlePhoneChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {!isFormValid && <p style={{ color: 'red', fontSize: '0.75rem' }}>Phone Number Error</p>}
          </div>
          <div>
            <label htmlFor="password" style={{ fontSize: '0.875rem', fontWeight: '500', color: '#333' }}>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={handlePasswordChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            {!isFormValid && <p style={{ color: 'red', fontSize: '0.75rem' }}>Password Error</p>}
          </div>
          <div>
            <button
              type="submit"
              style={{ width: '100%', padding: '10px', borderRadius: '4px', backgroundColor: '#272829', color: '#fff', fontWeight: 'bold', cursor: 'pointer', border: 'none' }}
            >
              Sign up
              </button>
          </div>
        </form>
        <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.875rem', color: '#272829' }}>
          Already a member?{' '}
          <Link  to="/login" style={{ fontWeight: 'bold', color: '#4F46E5', cursor: 'pointer', border: 'none', background: 'none' }}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}