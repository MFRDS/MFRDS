import React from 'react';

const SocialMedia = ({ icons, iconSize = 32, gap = 24 }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: `${gap}px`,
    flexWrap: 'wrap',
    marginTop: '16px',
  };

  const iconStyle = {
    width: `${iconSize}px`,
    height: `${iconSize}px`,
    cursor: 'pointer',
    transition: 'transform 0.2s',
  };

  return (
    <div style={containerStyle}>
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={item.img}
            alt={`social-${index}`}
            style={iconStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
