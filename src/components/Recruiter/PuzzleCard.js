import React from 'react';
import Card from './Card';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { PUZZLES } from '../../components/dummyData';
const PuzzlesCard= () => (
  <Card>
    <div className="puzzles-header">
      <h3 className="puzzles-title">Today's Puzzles</h3>
      <TrendingUp className="puzzles-icon" />
    </div>
    <ul className="puzzles-list">
      {PUZZLES.map((puzzle, index) => (
        <li key={index}>
          <a href="#" className="puzzle-item-link">
            <div className="puzzle-details">
              <span className="puzzle-name">{puzzle.name}</span>
              <span className="puzzle-connections">{puzzle.connections}</span>
            </div>
            <ArrowRight className="puzzle-arrow" />
          </a>
        </li>
      ))}
    </ul>
  </Card>
);
export default PuzzlesCard;