import React, { useState } from 'react';
import { User, Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleTheme, isScrolled, setCurrentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div 
          className="logo"
          onClick={() => setCurrentPage('home')}
        >
          <User />
        </div>

        {/* Tombol hamburger untuk mobile */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('about');
              setMenuOpen(false);
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
              setMenuOpen(false);
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
