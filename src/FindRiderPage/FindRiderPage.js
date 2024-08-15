import React from 'react';
import './FindRiderPage.css'; // Add styling here

function FindRiderPage() {
  return (
    <div className="find-rider-container">
      <div className="map-section">
        {/* Map placeholder */}
        <img src="/path-to-your-map-image.png" alt="Map" className="map-image" />
      </div>
      <div className="details-section">
        <h2>picked Product</h2>
        <div className="location-input">
          <span className="icon">📍</span>
          <input type="text" placeholder="pickup location" />
        </div>
        <div className="location-input">
          <span className="icon">📍</span>
          <input type="text" placeholder="Drop location" />
        </div>
        <button className="find-rider-button">Find Rider</button>
      </div>
    </div>
  );
}

export default FindRiderPage;
