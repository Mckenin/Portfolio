import React from "react";

const Project = ({ title, image, description, repo, live }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      <a href={live} target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  );
};

export default Project;
