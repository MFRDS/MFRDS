import React, { useState, useEffect } from 'react';
import SocialLinks from '../components/SocialLinks';


const HomePage = ({ setCurrentPage }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullName = "I''M MUHAMMAD FIRDAUS";
  const typingSpeed = 100;
  const startDelay = 500; 
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    let timeout;

    const typeWriter = () => {
      if (index < fullName.length) {
        setDisplayedText((prev) => prev + fullName.charAt(index));
        index++;
        timeout = setTimeout(typeWriter, typingSpeed);
      } else {
        setIsTyping(false);
      }
    };

    timeout = setTimeout(typeWriter, startDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="section">
      <div className="container">
        <div className="home-content">
          <h1 className="home-title typing-cursor">
            {displayedText}
          </h1>
          <p className="home-description">
            Passionate about creating impactful solutions through data and technology. 
            I enjoy working with complex datasets, building responsive websites, and 
            developing interactive applications to deliver meaningful user experiences. 
            I'm always curious, open to new ideas, and eager to grow both personally 
            and professionally in this fast-changing field.
          </p>
          
          <button
            onClick={() => setCurrentPage('about')}
            className="cta-button"
          >
            <span>See More About Me</span>
            <span className="cta-button-arrow">→</span>
          </button>

          
          
        </div>
      </div>
     <SocialLinks isScrolled={true} />
    </section>
    
  );
};

export default HomePage;
