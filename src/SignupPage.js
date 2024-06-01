import React from 'react';
import './SignupPage.css';

function SignupPage() {
  return (
    <div className="signup-page">
      <h1>Create an account</h1>
      <p>Connect with your friends today!</p>
      <form>
        <input type="text" placeholder="Enter Your Username" />
        <input type="email" placeholder="Enter Your Email" />
        <input type="tel" placeholder="Enter Your Phone Number" />
        <input type="password" placeholder="Enter Your Password" />
        <button type="submit">Sign Up</button>
      </form>
      <div className="or-with">Or With</div>
      <button className="facebook-button">Signup with Facebook</button>
      <button className="google-button">Signup with Google</button>
      <div className="login-link">
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default SignupPage;
