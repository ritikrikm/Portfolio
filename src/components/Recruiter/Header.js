import React, { useState, useRef, useEffect } from 'react';
import { Home, Users, Briefcase, MessageSquare, Bell, Search, ChevronDown, Sun, Moon } from 'lucide-react';
import NavIcon from './NavIcon';
import Avatar from './Avatar';
import UserMenuDropdown from './UserMenuDropdown';
import { MY_PROFILE } from '../dummyData';

const Header= ({ toggleTheme, isDark }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close the menu if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuRef]);

    return (
        <header className="main-header">
            <div className="header-content-wrapper">
            
                {/* Left: Logo & Search */}
                <div className="header-left-section">
                    <div className="header-logo">
                    <a href="/">Portf<span>olio</span></a>
                    </div>
                    <div className="header-search-container">
                    <Search className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                        disabled
                    />
                    </div>
                </div>

                {/* Center: Navigation */}
                <nav className="header-nav">
                    <NavIcon Icon={Home} label="Home" active />
                    <NavIcon Icon={Users} label="My Network" />
                    <NavIcon Icon={Briefcase} label="Jobs" />
                    <NavIcon Icon={MessageSquare} label="Messaging" />
                    <NavIcon Icon={Bell} label="Notifications" />
                </nav>

                {/* Right: User Menu & Dark Mode Toggle */}
                <div className="header-right-section">
                    <div className="user-menu-wrapper" ref={menuRef}>
                        <div 
                            className={`user-menu-stub ${isMenuOpen ? 'active' : ''}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-controls="user-dropdown-menu"
                            tabIndex="0" // Make it focusable
                            role="button"
                        >
                            <Avatar src={MY_PROFILE.avatarUrl} alt={MY_PROFILE.name} size={30} />
                            <div className="user-menu-label">
                                Me <ChevronDown className="user-menu-icon" />
                            </div>
                        </div>

                        {/* Dropdown Menu */}
                        {isMenuOpen && (
                            <div id="user-dropdown-menu" className="user-menu-dropdown-container">
                                <UserMenuDropdown 
                                    profile={MY_PROFILE} 
                                    onClose={() => setIsMenuOpen(false)} 
                                />
                            </div>
                        )}
                    </div>
                    
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle-button"
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? <Sun className="theme-icon" /> : <Moon className="theme-icon" />}
                    </button>
                </div>
            </div>
        </header>
    );
};
export default Header;