import React from "react";
import "./Services.css"
import product1 from "./Images/product1.jpeg";
import product2 from "./Images/product2.webp";
import product3 from "./Images/product3.png";
import product4 from "./Images/product4.jpg";
import product5 from "./Images/product5.jpg";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Services()
{
    useEffect(() => {
        AOS.init({ duration: 3000 }); // Initialize AOS with your desired options
    }, []);
    return(
        <div className="box" data-aos="fade-zoom-in">
                <h1>Features</h1>
                <div className="cards">
                    {/* <div className="card">
                        <img src="https://miro.medium.com/v2/resize:fit:1400/1*5IYtIe5OwxeoYXi226J-Uw.jpeg" alt="" />
                        <h3>Web Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihil ipsa distinctio fugiat sit. Et recusandae consequuntur quis aperiam obcaecati culpa quia. Eveniet minus vero magni velit, enim quia impedit!</p>
                        <div className="btndiv">
                        <button>GitHub</button>
                        <button>Live</button>
                        </div>
                    </div> */}
                    <div className="card" data-aos="zoom-in" >
                        <img src={product1} alt="" />
                        <h3>Graphic Design</h3>
                        <p>Graphic design is the art of creating visual content to communicate messages effectively. It combines creativity and technology to produce designs that can range from logos.</p>
                        <div className="button-container">
                        <button>GitHub</button>
                        <button>Live</button>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-out">
                        <img src={product2} alt=""  />
                        <h3>Web Development</h3>
                        <p>Web development requires knowledge of programming languages, frameworks, and tools that allow developers to build dynamic, responsive, and user-friendly websites.</p>
                        <div className="button-container">
                        <button>GitHub</button>
                        <button>Live</button>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-in">
                        <img src={product3} alt=""/>
                        <h3>Responsive Design</h3>
                        <p>Responsive design is a web development approach that ensures a website or application's layout and content adapt seamlessly to various screen sizes and devices. </p>
                        <div className="button-container">
                        <button>GitHub</button>
                        <button>Live</button>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-out" >
                        <img src={product4} alt="" />
                        <h3>Creative Gallery</h3>
                        <p>A creative gallery is a curated collection of visual works, such as art, photography, design, or other creative projects. It serves as a platform to showcase the designer's creativity, style, and skills. </p>
                        <div className="button-container">
                        <button>GitHub</button>
                        <button>Live</button>
                        </div>
                    </div>
                    <div className="card" data-aos="zoom-in" >
                        <img src= {product5} alt="" />
                        <h3>Web Services</h3>
                        <p>Web services are a set of protocols and tools designed to enable communication.Integration of various services and functionalities into applications.</p>
                        <div className="button-container">
                        <button>GitHub</button>
                        <button>Live</button>
                        </div>
                    </div>
                    <div className="">
                        {/* <img src="https://wallpapers.com/images/hd/angular-red-logo-ae4cl4qdy9zw5ddf.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihil ipsa distinctio fugiat sit. Et recusandae consequuntur quis aperiam obcaecati culpa quia. Eveniet minus vero magni velit, enim quia impedit!</p>
                        <button>GitHub</button>
                        <button>Live</button> */}
                    </div>
                    <br></br>
                </div>
            </div>
    )
}

export default Services;