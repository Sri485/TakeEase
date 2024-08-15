import React, { useState } from 'react';
import { auth, googleProvider, signInWithEmailAndPassword, signInWithPopup } from './firebase';
import { useNavigate } from 'react-router-dom'; // Adjust the path if needed
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailSignIn = (event) => {
    event.preventDefault();

    // Reset previous messages
    setErrorMessage('');

    // Basic validations
    if (!email.trim() || !password.trim()) {
      setErrorMessage('All fields are required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Invalid email address');
      return;
    }

    // Firebase email/password sign-in
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Signed in with email:', user);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Error signing in with email:', error);
        setErrorMessage('Error signing in with email. Please try again.');
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log('Signed in with Google:', user);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
        setErrorMessage('Error signing in with Google. Please try again.');
      });
  };

  return (
    <div className="login-page">
      <h2>WELCOME BACK</h2>
      <p>Welcome back! Please enter your details.</p>
      <form onSubmit={handleEmailSignIn}>
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password</a>
        </div>
        <button type="submit" className="sign-in-btn">Sign in</button>
      </form>
      <button className="google-button" onClick={handleGoogleSignIn}>Sign in with Google</button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="signup-link">
        Don’t have an account? <a href="/signup">Sign up for free!</a>
      </div>
    </div>
  );
}

export default LoginPage;
