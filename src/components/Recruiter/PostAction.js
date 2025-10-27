import React from 'react';
import { Heart, MessageSquareText, Repeat2, Send } from 'lucide-react';
const PostActions= () => (
  <div className="post-actions-container">
    <button className="post-action-button" disabled>
      <Heart className="action-icon" />
      <span className="action-label">Like (32)</span>
    </button>
    <button className="post-action-button" disabled>
      <MessageSquareText className="action-icon" />
      <span className="action-label">Comment (5)</span>
    </button>
    <button className="post-action-button" disabled>
      <Repeat2 className="action-icon" />
      <span className="action-label">Repost (2)</span>
    </button>
    <button className="post-action-button" disabled>
      <Send className="action-icon action-send-icon" />
      <span className="action-label">Send</span>
    </button>
  </div>
);
export default PostActions;