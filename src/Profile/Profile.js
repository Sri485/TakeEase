import React from 'react';
import './Profile.css';

import profile from '../assets/profile.jpg';

function Profile() {
  return (
    <div className="profile-container">
      {/* Profile Information */}
      <div className="profile-info">
        <img src={profile} alt="User" className="profile-picture-large" />
        <div className="profile-details">
          <h3>Sam</h3>
          <p>sam@info.com</p>
        </div>
      </div>

      {/* Profile Options */}
      <ul className="profile-options">
        <li><span className="icon">👤</span> Account</li>
        <li><span className="icon">⚙️</span> Settings</li>
        <li><span className="icon">❓</span> Help Center</li>
        <li className="option-toggle">
          <span className="icon">👁️</span> Incognito
          <input type="checkbox" className="toggle-switch" defaultChecked />
        </li>
        <li className="option-toggle">
          <span className="icon">🌙</span> Dark Mode
          <input type="checkbox" className="toggle-switch" />
        </li>
        <li className="plan-info">
          Starter Plan<br/>
          <small>Free until May 1st 2023</small>
        </li>
        <li>
          <button className="upgrade-button">Upgrade</button>
        </li>
        <li><span className="icon">🚪</span> Logout</li>
      </ul>
    </div>
  );
}

export default Profile;
