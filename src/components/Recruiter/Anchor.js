import React from 'react';
import Card from './Card';
import { Sparkles, Code, Briefcase } from 'lucide-react';
const PortfolioAnchorsCard= () => (
  <Card className="portfolio-anchors-card">
    <div className="anchor-header">Portfolio Sections</div>
    <div className="anchor-list">
      <a href="#skills" className="anchor-item">
        <Sparkles className="anchor-icon yellow" />
        Technical Skills
      </a>
      <a href="#projects" className="anchor-item">
        <Code className="anchor-icon cyan" />
        Projects Showcase
      </a>
      <a href="#experience" className="anchor-item">
        <Briefcase className="anchor-icon green" />
        Professional Experience
      </a>
    </div>
  </Card>
);
export default PortfolioAnchorsCard;