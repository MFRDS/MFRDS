import React from 'react';
import { Linkedin, Instagram, Github } from 'lucide-react';

const SocialLinks = ({ isScrolled }) => {
  return (
    <div className={`social-links ${isScrolled ? 'visible' : ''}`}>
      <a href="https://www.linkedin.com/in/muhammad-firdaus-47509b208/" className="social-link linkedin">
        <Linkedin />
      </a>
      <a href="https://www.instagram.com/mfrds72/" className="social-link instagram">
        <Instagram />
      </a>
      <a href="https://github.com/mfrds" className="social-link github">
        <Github />
      </a>
    </div>
  );
};

export default SocialLinks;