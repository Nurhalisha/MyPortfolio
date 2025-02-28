import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Hero";
import About from "./assets/components/About";
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
