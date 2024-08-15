import React from 'react';
import './Dashboard.css'; // Assuming you use an external CSS file for styling
import logo from '../assets/logo.jpg';
import auto from '../assets/auto.jpg';
import { useNavigate } from 'react-router-dom';
import electronics from '../assets/electronics.jpg';
import home from '../assets/home.jpg';
import dropbox from '../assets/dropbox.jpg';
import profile from '../assets/profile.jpg';

function Dashboard() {
    const navigate = useNavigate();
    const goToProfile = () => {
      navigate('/profile');
    };
    const goToFindRiderPage = () => {
      console.log("Auto image clicked, navigating to FindRiderPage");
      navigate('/find-rider');  // or use the appropriate path
    };
  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="header">
        <img src={logo} alt="Logo" className="logo" /> {/* Replace with your actual logo */}
        <input type="text" placeholder="Search" className="search-bar" />
      </div>

      {/* Categories */}
      <div className="categories">
        <div className="category" onClick={goToFindRiderPage} style={{ cursor: 'pointer' }}>
          <img src={auto} alt="Auto" className="category-image" /> {/* Replace with actual image */}
          <h2>Auto</h2>
        </div>
        <div className="category" onClick={goToFindRiderPage} style={{ cursor: 'pointer' }}>
          <img src={electronics} alt="Electronics" className="category-image" /> {/* Replace with actual image */}
          <h2>Electronics</h2>
        </div>
        <div className="category" onClick={goToFindRiderPage} style={{ cursor: 'pointer' }}>
          <img src={dropbox} alt="Drop Box" className="category-image" /> {/* Replace with actual image */}
          <h2>Drop Box</h2>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item">
          <img src={home} alt="Home" /> {/* Replace with home icon */}
          <p>Home</p>
        </div>
        <div className="nav-item">
          <img src="orders-icon.png" alt="Orders" /> {/* Replace with orders icon */}
          <p>Orders</p>
        </div>
        <div className="nav-item" onClick={goToProfile}>
          <img src={profile} alt="Profile" /> {/* Replace with profile icon */}
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
