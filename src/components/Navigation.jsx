import React, { useState, useEffect } from 'react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid #1e293b'
  };

  const containerStyle = {
    maxWidth: '1152px',
    margin: '0 auto',
    padding: '16px 16px'
  };

  const flexStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const logoStyle = {
    color: 'white',
    fontWeight: 'bold',
    fontSize: isMobile ? '18px' : '20px'
  };

  const buttonStyle = (isActive) => ({
    background: 'none',
    border: 'none',
    color: isActive ? '#60a5fa' : '#d1d5db',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    fontSize: '16px',
    padding: isMobile ? '12px 0' : '8px 0'
  });

  const mobileMenuButtonStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '4px'
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={flexStyle}>
          
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div style={{ display: 'flex', gap: '24px' }}>
              <button
                onClick={() => handleNavClick('home')}
                style={buttonStyle(currentPage === 'home')}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = currentPage === 'home' ? '#60a5fa' : '#d1d5db'}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('projects')}
                style={buttonStyle(currentPage === 'projects')}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = currentPage === 'projects' ? '#60a5fa' : '#d1d5db'}
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick('certificates')}
                style={buttonStyle(currentPage === 'certificates')}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = currentPage === 'certificates' ? '#60a5fa' : '#d1d5db'}
              >
                Certificates
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              style={mobileMenuButtonStyle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {isMobile && isMobileMenuOpen && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '16px 0',
            borderTop: '1px solid #374151',
            marginTop: '16px'
          }}>
            <button
              onClick={() => handleNavClick('home')}
              style={buttonStyle(currentPage === 'home')}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              style={buttonStyle(currentPage === 'projects')}
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick('certificates')}
              style={buttonStyle(currentPage === 'certificates')}
            >
              Certificates
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;