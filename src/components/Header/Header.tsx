import React from 'react';
import './Header.css';

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleDarkMode: () => void;
  darkMode: boolean;
  userName: string;
  userInitials: string;
}

const MenuIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SunIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MoonIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header: React.FC<HeaderProps> = ({
  onToggleSidebar,
  onToggleDarkMode,
  darkMode,
  userName,
  userInitials,
}) => {
  return (
    <header className="app-header">
      <div className="header-left">
        <button
          className="header-menu-btn"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <MenuIcon />
        </button>
      </div>

      <div className="header-right">
        <button
          className="header-icon-btn"
          onClick={onToggleDarkMode}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>

        <div className="header-user">
          <span className="header-username">{userName}</span>
          <div className="header-avatar">
            <div className="avatar-inner">
              <span className="avatar-initials">{userInitials}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;