import React from "react";

const BulletList = ({ items }) => {
  return (
    <ul className="bullet-list">
      {items.map((item, index) => (
        <li key={index} className="bullet-item">
          <div className="bullet-dot"></div>
          <div className="bullet-content">
            {item.link ? (
              <h3>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-link"
                >
                  {item.title}
                </a>
              </h3>
            ) : (
              <h3>{item.title}</h3>
            )}
            <p>{item.subtitle}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
