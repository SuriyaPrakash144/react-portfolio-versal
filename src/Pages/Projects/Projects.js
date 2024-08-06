import React from "react";
import "./Projects.css";
import project1 from "../Projects/project1.png";
import project2 from "../Projects/project2.png";
import project3 from "../Projects/project3.png";
import project4 from "../Projects/project4.png";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2500 }); // Initialize AOS with your desired options
}, []);
  return (
    <div className="projectsbox" data-aos="fade-in">
      <h1>My Projects</h1>
      <div className="responsive-two-column-grid">
        <div className="project-card" data-aos="zoom-in">
          <img src={project2} alt="Personal Portfolio - HTML CSS Bootstrap" />
          <a href="https://suriyaprakash144.github.io/Portfolio-Page/">Personal Portfolio - HTML CSS Bootstrap</a>
        </div>
        <div className="project-card" data-aos="zoom-in">
          <img src={project1} alt="Bakery Shop - HTML CSS Bootstrap  Javascript" />
          <a href="https://suriyaprakash144.github.io/Bakery-Shop/">Bakery Shop - HTML CSS Bootstrap  Javascript</a>
        </div>
        <div className="project-card" data-aos="zoom-in">
          <img src={project4} alt="Personal Portfolio - ReactJS" />
          <a href="https://suriyaprakash144.github.io/">Personal Portfolio - ReactJS</a>
        </div>
        <div className="project-card" data-aos="zoom-in">
          <img src={project3} alt="Pizza Restaurant - ReactJS" />
          <a href="https://suriyaprakash144.github.io/">Pizza Restaurant - ReactJS</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
