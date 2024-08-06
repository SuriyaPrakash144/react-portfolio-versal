import "./Home.css";
import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home()
{
    useEffect(() => {
        AOS.init({ duration: 2000 }); // Initialize AOS with your desired options
    }, []);
    return(
        
        <div className="portfolio" >
        <div className="textbox" data-aos="fade-up">
            <h3>Hi, my name is</h3>
            <h1>Suriya Prakash</h1>
            <h2>I build things for the web.</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cumque, maiores sit architecto, deleniti, earum laboriosam repellat quibusdam a dolorem similique aut placeat aliquam totam possimus unde. Laudantium, dolorem temporibus?</p>
            <button className="hiremebtn">Contact Me</button>
        </div>
    </div>

    );
}

export default Home;