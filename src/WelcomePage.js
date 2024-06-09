import React from 'react';
import './WelcomePage.css';
import backgroundImage from './assets/TakeEaseCopy_032 copy.jpg'; // Import the image
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div className="welcome-page">
      <h1 className="welcome-text">Welcome</h1>
      <img src={backgroundImage} alt="Background" className="background-image" />
      <Link className="content" to="/signup">
        <button className="get-started-button">Get Started</button>
      </Link>
    </div>
  );
}
export default WelcomePage;
