import Card from './Card';
import Avatar from './Avatar';
import { Bookmark } from 'lucide-react';
import FeedPostContent from './FeedContent';
import PostActions from './PostAction';
import  formatRelativeTime  from './RelativeTime';
const FeedPost = ({ post }) => {
    const anchorId = post.type === 'projects' ? 'projects' : post.type === 'skills' ? 'skills' : 'experience';

    return (
        <Card id={anchorId} className="feed-post-card">
            {/* Post Header (Author/Time) */}
            <div className="post-header">
                <Avatar src={post.authorAvatarUrl} alt={post.authorLabel} size={48} />
                <div className="post-info">
                    <h3 className="post-author">{post.authorLabel}</h3>
                    <p className="post-timestamp">
                        Portfolio Update • {formatRelativeTime(post.createdAt)}
                    </p>
                </div>
                <Bookmark className="post-bookmark-icon" />
            </div>

            {/* Post Content */}
            <FeedPostContent post={post} />

            {/* Post Actions (Like, Comment, etc.) */}
            <PostActions />
        </Card>
    );
};
export default FeedPost;