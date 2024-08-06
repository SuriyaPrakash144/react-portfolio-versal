import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
// import Blog from "./Pages/Blog/Blog";
import { Student } from './components/Student';
import {Cart} from './components/Cart/Cart';
import {CartDetails} from './components/Cart/CartDetails';
import Forms from './Pages/Forms/Forms';
import Skills from './Pages/Skills/Skills';


function App() {

// const items=[
//   {id:1,name:"Sundhar"},
//   {id:2,name:"Suriya"},
//   {id:3,name:"Ashok"},
//   {id:4,name:"Babu"},
//   {id:5,name:"Kumar"},
// ]

  return (
    
    <Router>
      <Header />
      {/* <Student items={items} color="blue" /> */}
      {/* <Cart /> */}
      {/* <CartDetails /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/forms" element={<Forms/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/cart" element={<CartDetails/>} />
          {/* <Route path="/blog" element={<Blog/>} />  */}
        </Routes>
      </main>

      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      {/* <Blog /> */}
      {/* <Forms /> */}
      <Contact />     
      <Footer />
    </Router>
  );
};



export default App;
