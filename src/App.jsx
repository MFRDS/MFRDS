import React, { useState } from 'react';
import Navigation from './components/Navigation';
import StarsBackground from './components/StarsBackground';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CertificatesPage from './pages/CertificatesPage';
import './styles/globals.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'certificates':
        return <CertificatesPage />;
      default:
        return <HomePage />;
    }
  };

  const appStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #111827 0%, #000000 50%, #1e3a8a 100%)',
    color: 'white',
    position: 'relative',
    overflowX: 'hidden'
  };

  const mainStyle = {
    position: 'relative',
    zIndex: 10
  };

  return (
    <div style={appStyle}>
      <StarsBackground />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={mainStyle}>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;