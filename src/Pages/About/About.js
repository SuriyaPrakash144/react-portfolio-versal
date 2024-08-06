import "./About.css";
import aboutimage from "../About/Images/aboutimage.png";
import Resume from "../About/Pdf/Resume.pdf";
import React from 'react';
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function About()
{
    useEffect(() => {
        AOS.init({ duration: 2000 }); // Initialize AOS with your desired options
    }, []);
    return(
       <section className="about" data-aos="fade-right">
        <div className="main">
            <img src={aboutimage} data-aos="flip-left" />
                <div className="about-text">
                <h1>About Me</h1>
                <h5>Developer<span> & Designer</span></h5>
                <p>
                Suriya Prakash is a dedicated web developer with a strong foundation in programming, holding a BCA degree. With expertise in web development, Suriya is passionate about crafting responsive and visually appealing websites, ensuring a seamless user experience across all devices. Whether it's front-end design or back-end functionality, Suriya's skills make them a valuable asset in the world of web development.
                </p>
                <button data-aos="zoom-out">
                <a href={Resume} download="Resume.pdf">
                    Download CV
                </a>
                </button>
                </div>
        </div>
       </section>
    );
}

export default About;