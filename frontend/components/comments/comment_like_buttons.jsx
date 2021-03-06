import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

function LikeButtons(props) {
    
    const { comment, userId } = props;
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    const [kind, setKind] = useState(null)

    useEffect(() => {
        setLikes(comment.likesCount)
        setDislikes(comment.dislikesCount)
        setKind(comment.like ? comment.like.kind : null)
    }, [comment])

    const handleLike = (currentLike, btnKind, model) => {
        
        if (userId) {
            const antiBtnKind = (btnKind == "like") ? "dislike" : "like"
            const id = currentLike ? { id: currentLike.id } : {}
            const like = Object.assign(id, { liker_id: userId, 
                likeable_type: model, 
                likeable_id: comment.id, 
                kind: btnKind
            })
            if (currentLike) {
                switch (currentLike.kind) {
                    case btnKind:
                        props.deleteLike(like)
                        if (btnKind == "like") {
                            setLikes(likes - 1)
                            setKind(null)
                        } else {
                            setDislikes(dislikes - 1)
                            setKind(null)
                        }
                        break;
        
                    case antiBtnKind:
                        props.updateLike(like)
                        if (antiBtnKind == "like") {
                            setLikes(likes - 1)
                            setDislikes(dislikes + 1)
                            setKind("dislike")
                        } else {
                            setLikes(likes + 1)
                            setDislikes(dislikes - 1)
                            setKind("like")
                        }
                        break;
                
                    default:
                        break;
                }
            } else {
                props.createLike(like)
                if (btnKind == "like") {
                    setLikes(likes + 1)
                    setKind("like")
                } else {
                    setDislikes(dislikes + 1)
                    setKind("dislike")
                }
            }
        } else {
            props.history.push('/login')
        }
    }

    return <div id="comments-likes-box">
    <div className="flex-row">
        <button  title="I like this" 
                onClick={() => handleLike(comment.like, "like", "Comment")}
                className={kind === "like" ?
                    "blue" : "grey"}>
            <svg viewBox="0 0 24 24">
                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
            </svg>
            <div>{likes === 0 ? "" : likes}</div>
        </button>
        <button title="I dislike this" 
                onClick={() => handleLike(comment.like, "dislike", "Comment")}
                className={kind === "dislike" ?
                    "blue" : "grey"}>
            <svg viewBox="0 0 24 24">
                <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
            </svg>
            <div>{dislikes === 0 ? "" : dislikes}</div>
        </button>
    </div>
    </div>
}

export default withRouter(LikeButtons);