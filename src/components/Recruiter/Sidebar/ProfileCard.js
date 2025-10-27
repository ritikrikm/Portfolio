import React from 'react';
import Card from '../Card';
import Avatar from '../Avatar';
import { Diamond, MapPin } from 'lucide-react';
import { MY_PROFILE } from '../../dummyData';
const ProfileCard= () => (
  <Card className="profile-card">
    {/* Background Banner */}
    <div className="profile-card-banner"></div>
    <div className="profile-card-body">
      
      {/* Avatar and Name */}
      <div className="profile-card-header">
        <div className="profile-avatar-wrapper">
          <Avatar src={MY_PROFILE.avatarUrl} alt={MY_PROFILE.name} size={72} />
        </div>
        <h2 className="profile-name">{MY_PROFILE.name}</h2>
        <p className="profile-tagline">{MY_PROFILE.tagline}</p>
        <p className="profile-location"><MapPin className="location-icon" />{MY_PROFILE.location}</p>
      </div>

      <hr className="divider" />
      
      {/* Quick Stats */}
      <div className="profile-stats-section">
        <div className="profile-stat-item">
          <span className="stat-label">Profile viewers</span>
          <span className="stat-value">{MY_PROFILE.views}</span>
        </div>
        <div className="profile-stat-item">
          <span className="stat-label">Post impressions</span>
          <span className="stat-value">{MY_PROFILE.impressions}</span>
        </div>
      </div>

      <hr className="divider" />
      
      {/* Premium */}
      <a href="#premium" className="profile-premium-link">
        <Diamond className="premium-icon" />
        Premium benefits
      </a>
    </div>
  </Card>
);
export default ProfileCard;