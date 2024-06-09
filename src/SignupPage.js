import React from 'react';
import './SignupPage.css';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Signed up with email:', user);
        // Optionally update the user profile with additional information (username, phone, etc.)
      })
      .catch((error) => {
        console.error('Error signing up with email:', error);
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
      });
  };

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log('Signed in with Facebook:', user);
      })
      .catch((error) => {
        console.error('Error signing in with Facebook:', error);
      });
  };

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
