import React from 'react';
import { User, Moon, Sun } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme, isScrolled, setCurrentPage }) => {
  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div 
          className="logo"
          onClick={() => setCurrentPage('home')}
        >
          <User />
        </div>
        
        <div className="nav-links">
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('about');
            }}
          >
            About
          </a>
          <a
            href="#projects"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('projects');
            }}
          >
            Projects
          </a>
          
          <div className="theme-toggle" onClick={toggleTheme}>
            <div className={`theme-toggle-slider ${isDarkMode ? 'dark' : 'light'}`}>
              {isDarkMode ? <Moon /> : <Sun />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;