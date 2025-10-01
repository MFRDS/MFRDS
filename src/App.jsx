import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      <div className="grid-bg"></div>
      
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        isScrolled={isScrolled} 
        setCurrentPage={setCurrentPage} 
      />
      
      <main>
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'projects' && <ProjectsPage />}
      </main>
      
      
    </div>
  );
}

export default App;