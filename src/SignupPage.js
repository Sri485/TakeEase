import React, { useState } from 'react';
import { auth, googleProvider, facebookProvider, signInWithPopup, createUserWithEmailAndPassword } from './firebase'; // Adjust the path if needed
import './SignupPage.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailSignUp = (event) => {
    event.preventDefault();

    // Reset previous messages
    setErrorMessage('');
    setSuccessMessage('');

    // Basic validations
    if (!username.trim() || !email.trim() || !phone.trim() || !password.trim()) {
      setErrorMessage('All fields are required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Invalid email address');
      return;
    }

    if (!/^\d+$/.test(phone)) {
      setErrorMessage('Phone number should contain only digits');
      return;
    }

    // Password validation
    if (password.length < 6 || password.length > 14) {
      setErrorMessage('Password must be between 6 and 14 characters long');
      return;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(password)) {
      setErrorMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }

    // All validations passed, show success message
    setSuccessMessage('Sign up successful!');

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Signed up with email:', user);
        // Optionally update the user profile with additional information (username, phone, etc.)
      })
      .catch((error) => {
        console.error('Error signing up with email:', error);
        setErrorMessage('Error signing up with email. Please try again.');
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log('Signed in with Google:', user);
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
        setErrorMessage('Error signing in with Google. Please try again.');
      });
  };


  return (
    <div className="signup-page">
      <h1>Create an account</h1>
      <p>Connect with your friends today!</p>
      <form onSubmit={handleEmailSignUp}>
        <div className="input-container">
          <input type="text" placeholder="Enter Your Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
        <div className="input-container">
          <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
        <div className="input-container">
          <input type="tel" placeholder="Enter Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
        <div className="input-container">
          <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="or-with">Or With</div>
      <button className="google-button" onClick={handleGoogleSignIn}>Signup with Google</button>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="login-link">
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default SignupPage;
