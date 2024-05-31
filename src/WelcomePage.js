import React from 'react';
import './WelcomePage.css';
import backgroundImage from './assets/TakeEaseCopy_032 copy.jpg'; // Import the image

function WelcomePage() {
  return (
    <div className="welcome-page">
      <img src={backgroundImage} alt="Background" className="background-image" />
      <div className="content">
        <h1 className="welcome-text">Welcome</h1>
        <button className="get-started-button">Get Started</button>
      </div>
    </div>
  );
}

export default WelcomePage;
