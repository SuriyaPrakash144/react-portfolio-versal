import React from "react";
import "./Projects.css";
import project1 from "../Projects/project1.png";
import project2 from "../Projects/project2.png";

function Projects() {
  return (
    <div className="container">
      <h2>My Projects</h2>
      <div className="cardbox">
        <div className="cardimage1">
          <img src={project2} alt="Project 2" />
          <a href="https://suriyaprakash144.github.io/Portfolio-Page/" target="_blank" rel="noopener noreferrer">https://suriyaprakash144.github.io/Portfolio-Page/</a>
        </div>
        <div className="cardimage2">
          <img src={project1} alt="Project 1" />
          <a href="https://suriyaprakash144.github.io/Bakery-Shop/" target="_blank" rel="noopener noreferrer">https://suriyaprakash144.github.io/Bakery-Shop/</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
