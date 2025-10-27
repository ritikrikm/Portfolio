import React from 'react';
import Card from './Card';
import { Shield } from 'lucide-react';
import { NEWS_DATA } from '../dummyData';
const NewsCard= () => (
  <Card>
    <div className="news-header">
      <h3 className="news-title">LinkedIn News</h3>
      <Shield className="news-icon" />
    </div>
    <ul className="news-list">
      {NEWS_DATA.map((item, index) => (
        <li key={index} className="news-item">
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link">
            <span className="news-bullet">•</span>
            {item.title}
          </a>
          <span className="news-reads">{item.reads}</span>
        </li>
      ))}
    </ul>
    <button className="news-show-more">Show more</button>
  </Card>
);
export default NewsCard;