import React, { useState, useEffect } from 'react';
import CommentIndexItem from './comment_index_item'

function CommentIndex(props) {
    const { comments,
            userId,
            deleteComment,
            createLike,
            updateLike,
            deleteLike
    } = props;

    if (comments) {
        
        return (
            <div className="comment-index">
                {comments.map(comment => (
                    <CommentIndexItem
                        key={comment.id}
                        comment={comment}
                        deleteComment={deleteComment}
                        userId={userId}
                        createLike={createLike}
                        updateLike={updateLike}
                        deleteLike={deleteLike}                        />
                ))}
            </div>
        );
    } else {
        return "loading comments"
    }
}

export default CommentIndex;