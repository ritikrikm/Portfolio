import React, { useState, useEffect } from 'react';
import "./WorkCardStyle.css"; 

const WorkMorphingGrid = ({ projects }) => {
  // This state logic for cycling projects remains the same
  const initialIndices = Array.from({ length: 6 }, (_, i) => i);
  const [currentIndices, setCurrentIndices] = useState(initialIndices);

  useEffect(() => {
    if (projects.length <= 6) return; 

    const interval = setInterval(() => {
      setCurrentIndices(prevIndices => {
        const nextStartIndex = (prevIndices[0] + 8) % projects.length;
        return Array.from({ length: 6 }, (_, i) => (nextStartIndex + i) % projects.length);
      });
    }, 12000); 
    return () => clearInterval(interval);
  }, [projects.length]);

  // Get the 6 full project objects to display
  const currentProjects = currentIndices.map(index => projects[index]);

  if (currentProjects.some(proj => !proj)) {
    return <div className="project-heading">Loading projects...</div>;
  }

  return (
    <div className="morph-grid-container">
      {currentProjects.map((project, index) => (
        <div 
          key={project.title || index}
          className={`morph-tile tile-${index + 1}`}
          // The hover-to-pause logic is still handled in CSS
        >
          {/* The *entire card* is one link.
            I'll use `project.view` as you specified "github". 
            If your data has a 'github' prop, you can use `project.github`
          */}
          <a 
            href={project.view} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={project.title}
            className="project-link-wrapper"
          >
            {/* Image is the background */}
            <img src={project.imgsrc} alt={project.title} />

            {/* Project details are an overlay, always visible */}
            <div className="project-details-overlay">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-text">{project.text}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default WorkMorphingGrid;