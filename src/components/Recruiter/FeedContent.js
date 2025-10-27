import React from 'react';
import { Layers, Link, Code, Clock  } from 'lucide-react';
import Badge from './Badge';
import  Card  from './Card';

const FeedPostContent = ({ post }) => {
  const payload = post.payload;

  switch (post.type) {
    case 'skills':
      const skillPayload = payload ;
      return (
        <div className="skills-content-container">
          <h3 className="skills-main-title">Technical Skill Mastery</h3>
          {skillPayload.map((category, index) => {
            const Icon = category.icon || Layers;
            return (
              <div key={index}>
                <h4 className="skill-category-title">
                  <Icon className="skill-category-icon" />
                  {category.category}
                </h4>
                <div className="skill-badge-list">
                  {category.items.map((item, i) => (
                    <Badge key={i}>{item}</Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );

    case 'projects':
      const projectPayload = payload ;
      return (
        <div className="projects-content-container">
          <h3 className="projects-main-title">Key Projects</h3>
          {projectPayload.map((project, index) => (
            <Card key={index} className="project-card">
              <h4 className="project-title-link">{project.title}</h4>
              <p className="project-summary">{project.summary}</p>
              
              {/* Links */}
              <div className="project-links-section">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link demo">
                    <Link className="link-icon" /> Live Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link repo">
                    <Code className="link-icon" /> Source Code
                  </a>
                )}
              </div>

              {/* Tags */}
              <div className="project-tags-section">
                {project.tags.map((tag, i) => (
                  <Badge key={i} className="small">{tag}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      );

    case 'experience':
      const experiencePayload = payload ;
      return (
        <div className="experience-content-container">
          <h3 className="experience-main-title">Career Timeline</h3>
          {experiencePayload.map((role, index) => (
            <div key={index} className="experience-role-item">
              {/* Timeline Dot/Line */}
              <div className="timeline-line"></div>
              <div className="timeline-dot"></div>
              
              {/* Content */}
              <div className="experience-details">
                <div className="role-header">
                  <h4 className="role-title">{role.role}</h4>
                  <p className="role-duration">
                    <Clock className="duration-icon" />
                    {role.start} – {role.end}
                  </p>
                </div>
                <p className="role-company-info">{role.company} {role.location && <span className="role-location">({role.location})</span>}</p>
                <ul className="role-bullets-list">
                  {role.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{ __html: bullet }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      );

    default:
      return <p className="feed-error-message">Error: Unknown post type.</p>;
  }
};
export default FeedPostContent;