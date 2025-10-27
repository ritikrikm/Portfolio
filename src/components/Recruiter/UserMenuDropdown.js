import React from 'react';
import Card from './Card';
import  Avatar from './Avatar';
import { Settings, User } from 'lucide-react';
const UserMenuDropdown = ({ profile, onClose }) => {
    // This simulated function handles the "finish previous stack activities" part
    const handleProfileClick = () => {
        console.log("Action: Navigating to Profile & clearing previous stack activities.");
        // In a real app, this would be a router push and state reset:
        // router.push('/me');
        // dispatch(clearActivityStack()); 
        onClose(); // Close the menu
    };

    const handleSettingsClick = () => {
        console.log("Action: Navigating to Settings.");
        onClose();
    };

    return (
        <Card className="user-menu-dropdown-card">
            {/* Top Section: Profile Summary */}
            <div className="menu-profile-summary">
                <Avatar src={profile.avatarUrl} alt={profile.name} size={60} />
                <div>
                    <h4 className="menu-profile-name">{profile.name}</h4>
                    <p className="menu-profile-tagline">{profile.tagline}</p>
                </div>
            </div>
            <button 
                onClick={handleProfileClick} 
                className="menu-view-profile-button"
            >
                View Profile
            </button>
            
            <hr className="divider" />

            {/* Account & Settings Links */}
            <div className="menu-section">
                <h5 className="menu-section-title">Account</h5>
                <a href="#settings" onClick={handleSettingsClick} className="menu-link-item">
                    <Settings className="menu-link-icon" /> Settings & Privacy
                </a>
                <a href="#help" className="menu-link-item">
                    <User className="menu-link-icon" /> Help
                </a>
            </div>

            <hr className="divider" />
            
            {/* Sign Out */}
            <div className="menu-section">
                <a href="#signout" className="menu-link-item sign-out">
                    Sign Out
                </a>
            </div>
        </Card>
    );
};
export default UserMenuDropdown;