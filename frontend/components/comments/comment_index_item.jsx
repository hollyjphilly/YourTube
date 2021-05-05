import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CommentIndexItem extends React.Component {
    render() {
        const { comment } = this.props;
        if (comment) {
            return (
                <div className="comment-display">
                    {comment.commenter.profile_image_url ? <img
                        className="user-icon-bigger"
                        src={comment.commenter.profile_image_url}>
                    </img> : <FontAwesomeIcon
                            className="vii-no-user-icon"
                        icon={['fa', 'user-circle']}
                    />}
                    <div className="comment-details">
                        <div className="comment-user-date">
                            <h3>{comment.commenter.username}</h3>
                            <p className="comment-date">{comment.date}</p>
                        </div>
                        <p>{comment.body}</p>
                    </div>
                </div>
            );
        } else {
            return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        }

    }
}

export default CommentIndexItem;