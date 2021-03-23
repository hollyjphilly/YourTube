import React from 'react';
import CommentIndexItem from './comment_index_item'

class CommentIndex extends React.Component {
    render() {
        const { comments } = this.props;
        if (comments) {
            return (
                <div className="comment-index">
                    {comments.map(comment => (
                        <CommentIndexItem
                            key={comment.id}
                            comment={comment}/>
                    ))}
                </div>
            );
        } else {
            return null
        }

    }
}

export default CommentIndex;