import React, { useState } from 'react';
import FadeInComponent from './FadeInComponent';

const SkillCard = ({ icon, skill, level, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    border: '1px solid rgba(148, 163, 184, 0.3)',
    backgroundColor: isHovered ? 'rgba(226, 232, 240, 0.3)' : 'rgba(226, 232, 240, 0.2)',
    borderRadius: '6px',
    padding: '16px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    minHeight: '120px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <FadeInComponent delay={delay}>
      <div 
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ fontSize: '28px', marginBottom: '8px' }}>{icon}</div>
        <div style={{ color: 'white', fontWeight: '600', fontSize: '16px' }}>{skill}</div>
        <div style={{ color: '#9ca3af', fontSize: '14px' }}>{level}</div>
      </div>
    </FadeInComponent>
  );
};

export default SkillCard;