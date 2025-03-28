import React from "react";
import Project from "../components/Project";

const projects = [
  {
    title: "Project 1",
    image: "/path/to/image1.jpg",
    description: "Description of project 1",
    repo: "https://github.com/yourname/project1",
    live: "https://yourproject1.netlify.app"
  },
  {
    title: "Project 2",
    image: "/path/to/image2.jpg",
    description: "Description of project 2",
    repo: "https://github.com/yourname/project2",
    live: "https://yourproject2.netlify.app"
  }
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <Project key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
