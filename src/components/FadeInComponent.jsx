import React, { useState, useEffect } from 'react';

const FadeInComponent = ({ children, delay = 0, slideIn = true }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const style = {
    transition: 'all 1s ease-in-out',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : slideIn ? 'translateY(40px)' : 'none'
  };

  return <div style={style}>{children}</div>;
};

export default FadeInComponent;