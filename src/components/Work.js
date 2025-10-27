import React from 'react';
import "./WorkCardStyle.css"; 
import WorkMorphingGrid from "./WorkMorphingGrid"; 
import WorkCardData from "./WorkCardData"; 

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      
    
      <WorkMorphingGrid projects={WorkCardData} />

    </div>
  );
};

export default Work;