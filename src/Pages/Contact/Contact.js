import React, { useState } from "react";
import "./Contact.css";
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Contact() {

  useEffect(() => {
    AOS.init({ duration: 3000 }); // Initialize AOS with your desired options
}, []);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="container" data-aos="fade-in">
      <h1 className="brand"><span></span></h1>
      <div className="wrapper">
        <div className="company-info" data-aos="fade-right">
          <h3>Contact Me</h3>
          <br></br>
          <ul>
            <li><i className="fa fa-road"></i> 6/255, Sirumalai Dam Road,
            Rajathanikottai Post,
            <br></br>Kodaikanal Road,
            <br></br> Dindigul.</li>
            <br></br>
            <li><i className="fa fa-phone"></i> +91 8098645683</li>
            <br></br>
            <li><i className="fa fa-envelope"></i> suriyaprakasha144@gmail.com</li>
          </ul>
       
          <ul className="socialmedia" >
  <h4>Social Media</h4> 
  <a href="https://www.facebook.com/profile.php?id=100062754324837&mibextid=ZbWKwL"><li><i className="fa-brands fa-facebook"></i></li></a>
  <a href="https://www.instagram.com/mr._.suriya._.14?igsh=MWc0eGduY292azFpaA=="><li><i className="fa-brands fa-instagram"></i></li></a>
  <a href="https://www.linkedin.com/in/suriya-prakash-a-2306b227a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><li><i className="fa-brands fa-linkedin"></i></li></a>
  <a href="https://github.com/SuriyaPrakash144"><li><i className="fa-brands fa-github"></i></li></a>
</ul>



        </div>
        <div className="contact" data-aos="fade-left">
          {/* <h3>E-mail Us</h3> */}
          <form id="contact-form" onSubmit={handleSubmit}>
            <p>
              <label>First Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
            </p>
            <p>
              <label>Last Name</label>
              <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} />
            </p>
            {/* <p>
              <label>E-mail Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
            </p> */}
            <p>
              <label>Phone Number</label>
              <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} />
            </p>
            <p>
              <label>Email Address</label>
              <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} />
            </p>
            <p className="full">
              <label>Message</label>
              <textarea name="message" rows="5" id="message" value={formData.message} onChange={handleChange}></textarea>
            </p>
            <p className="full">
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </div>
      <br></br>
    </div>
    
  );
}

export default Contact;
