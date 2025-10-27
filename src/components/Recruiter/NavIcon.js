import React from 'react';

const NavIcon = ({ Icon, label, active = false }) => (
  <button
    className={`header-nav-icon ${active ? 'active' : ''}`}
    aria-label={label}
  >
    <Icon className="nav-icon-svg" />
    <span className="nav-icon-label">{label}</span>
  </button>
);
export default NavIcon;