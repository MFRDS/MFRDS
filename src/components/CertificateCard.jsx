import React, { useState } from 'react';
import FadeInComponent from './FadeInComponent';

const CertificateCard = ({ title, issuer, date, link, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    border: '1px solid rgba(148, 163, 184, 0.3)',
    backgroundColor: isHovered ? 'rgba(226, 232, 240, 0.3)' : 'rgba(226, 232, 240, 0.2)',
    borderRadius: '6px',
    padding: '16px',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    minHeight: '120px'
  };

  return (
    <FadeInComponent delay={delay}>
      <div 
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div style={{ color: 'white', fontWeight: '600', flex: 1, fontSize: '16px', lineHeight: '1.4' }}>{title}</div>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'none', marginLeft: '8px' }}>
              <span style={{ fontSize: '14px' }}>🔗</span>
            </a>
          )}
        </div>
        <div style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '4px' }}>{issuer}</div>
        <div style={{ color: '#6b7280', fontSize: '12px' }}>{date}</div>
      </div>
    </FadeInComponent>
  );
};

export default CertificateCard;