import React, { useState } from 'react';
import FadeInComponent from './FadeInComponent';

const ProjectCard = ({ link, img, delay, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    border: '1px solid rgba(148, 163, 184, 0.3)',
    backgroundColor: 'rgba(226, 232, 240, 0.2)',
    marginTop: '12px',
    borderRadius: '6px',
    color: 'white',
    padding: '16px',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    backdropFilter: 'blur(10px)',
    width: '100%',
    boxSizing: 'border-box'
  };

  return (
    <FadeInComponent delay={delay} slideIn={false}>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
        <div 
          style={cardStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img 
            src={img} 
            style={{ 
              width: '100%', 
              height: '192px', 
              objectFit: 'cover', 
              borderRadius: '8px', 
              marginBottom: '12px' 
            }} 
            alt={title} 
          />
          <div style={{ 
            color: 'white', 
            fontSize: '18px', 
            fontWeight: '600', 
            marginBottom: '8px',
            lineHeight: '1.4'
          }}>
            {title}
          </div>
          <div style={{ 
            color: '#9ca3af',
            fontSize: '14px',
            lineHeight: '1.5'
          }}>
            {description}
          </div>
        </div>
      </a>
    </FadeInComponent>
  );
};

export default ProjectCard;