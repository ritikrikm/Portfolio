import React from 'react';
import Card from './Card';
import { QUICK_ACCESS_ITEMS } from '../dummyData';
const QuickAccessCard= () => (
  <Card className="quick-access-card">
    <div className="quick-access-list">
      {QUICK_ACCESS_ITEMS.map((item, index) => {
          const Icon = item.icon;
          return (
              <a key={index} href={item.href} className="quick-access-item">
                  <Icon className="quick-access-icon" />
                  {item.label}
              </a>
          );
      })}
    </div>
  </Card>
);

export default QuickAccessCard;