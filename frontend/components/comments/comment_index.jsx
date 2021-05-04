import React, { useState, useEffect } from 'react';
import CommentIndexItem from './comment_index_item'

function CommentIndex(props) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        setComments(props.comments)
    }, [props.comments])

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

export default CommentIndex;