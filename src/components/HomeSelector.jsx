import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeSelector.css';
import recImage from '../assets/rec.png';  
import devImage from '../assets/dev.png';  

const HomeSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="home-selector-container">
      <h1>Who’s Exploring?</h1>
      <p className="subtitle">Select your profile to continue.</p>
      <div className="profile-cards">
        {/* Recruiter Profile */}
        <div className="profile-card" onClick={() => navigate('/home1')}>
          <div className="profile-image-container">
            <img src={recImage} alt="Recruiter" className="profile-image" />
          </div>
          <p className="profile-name">Recruiter</p>
        </div>

        {/* Developer Profile */}
        <div className="profile-card" onClick={() => navigate('/home')}>
          <div className="profile-image-container">
            <img src={devImage} alt="Developer" className="profile-image" />
          </div>
          <p className="profile-name">Developer</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSelector;