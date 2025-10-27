import React from 'react';
import  Avatar  from '../../components/Recruiter/Avatar';
import { Monitor, Calendar, Briefcase, Shield } from 'lucide-react';
import Card from '../../components/Recruiter/Card';
import { MY_PROFILE } from '../dummyData';

const ComposerStub= () => (
  <Card className="composer-stub-card">
    <div className="composer-input-section">
      <Avatar src={MY_PROFILE.avatarUrl} alt={MY_PROFILE.name} size={48} />
      <input
        type="text"
        placeholder="Start a post, portfolio update, or celebrate a success"
        className="composer-input"
        disabled
      />
    </div>
    <div className="composer-actions-section">
      <button className="composer-action-button blue" disabled>
        <Monitor className="composer-action-icon" />Media
      </button>
      <button className="composer-action-button amber" disabled>
        <Calendar className="composer-action-icon" />Event
      </button>
      <button className="composer-action-button green" disabled>
        <Briefcase className="composer-action-icon" />Job Listing
      </button>
      <button className="composer-action-button red" disabled>
        <Shield className="composer-action-icon" />Write Article
      </button>
    </div>
  </Card>
);

export default ComposerStub;