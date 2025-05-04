import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Hero";
import About from "./assets/components/About"; 
import Blog from "./assets/components/Blog"; 
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import "./App.css"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </Router>
  );
}

export default App;
