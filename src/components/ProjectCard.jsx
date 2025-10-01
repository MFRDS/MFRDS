import React from 'react';

const ProjectCard = ({ title, description, tags, image, link }) => {
  return (
    <div className="project-card">
      {image && (
        <div className="project-card-image">
          <img src={image} alt={title} />
        </div>
      )}

      <div className="project-card-body">
        {link ? (
          <h3>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {title}
            </a>
          </h3>
        ) : (
          <h3>{title}</h3>
        )}

        <p className="project-card-description">{description}</p>

        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
