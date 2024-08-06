import "./Skills.css";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills()
{
    useEffect(() => {
        AOS.init({ duration: 3000 }); // Initialize AOS with your desired options
    }, []);
    return(
        <>
        <div className="skillbox" data-aos="fade-in">
        <h1 className="skillstext">Skills</h1>
        <h3>Why Choose Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos.
        rerum commodi corrupti, temporibus non quam.
        </p>
        </div>
    <div className="skilldiv">
    <div className="containerskills">
        <div className="bar front expert" data-skill="HTML5"></div>
        <div className="bar front advanced" data-skill="CSS3"></div>
        <div className="bar learning" data-skill="BOOTSTRAP"></div>
    </div>
    <div className="containerskills ">
    <div className="bar front sql" data-skill="SQL"></div>
        <div className="bar back basic" data-skill="JAVASCRIPT"></div>
        <div className="bar back react" data-skill="REACTJS"></div>
    </div>
    </div>
        </>
    );
};

export default Skills;