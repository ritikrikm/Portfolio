import React from "react";
import "./index.css"
import Home from "./routes/Home"
import About from "./routes/About"
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import Experience from "./routes/Experience"
import { Route, Routes } from "react-router-dom";
import HomeSelector from './components/HomeSelector';
import Recruiter from './components/Recruiter/Recruiter';
function App() {
  return (
  <>
  <Routes>
    {/* Netflix-style landing page */}
    <Route path="/" element={<HomeSelector />} />
    {/* Recruiter route */}
    <Route path="/home1" element={<Recruiter />} />
    <Route path="/home" element={<Home/>} /> 
    <Route path="/project" element={<Project/>} /> 
    <Route path="/about" element={<About/>} /> 
    <Route path="/contact" element={<Contact/>} /> 
    <Route path="/experience" element={<Experience/>} /> 
    
  </Routes>
 
  </>
  );
}

export default App;
