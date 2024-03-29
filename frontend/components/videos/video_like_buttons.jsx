import React, { useEffect, useState } from 'react';

function LikeButtons(props) {
    const { video, userId } = props;
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    const [kind, setKind] = useState(null)

    useEffect(() => {
        setLikes(video.likesCount)
        setDislikes(video.dislikesCount)
        setKind(video.like ? video.like.kind : null)
    }, [video])

    const handleLike = (btnKind) => {
        if (userId) {      // If the users is signed in...
            
            const like = {   // construct a like object for future use.
                id: (video.like ? video.like.id : null),
                liker_id: userId, 
                likeable_type: "Video", 
                likeable_id: video.id, 
                kind: btnKind
            }

            if (kind) {       // If they have a like in the database,

                const oppositeBtnKind = (btnKind == "like") ? "dislike" : "like"

                switch (kind) {
                    case btnKind: // and clicked same btn as the kind in db 
                        props.deleteLike(like) //  DELETE their like
                        if (btnKind == "like") {
                            setLikes(likes - 1)
                            setKind(null)
                        } else {
                            setDislikes(dislikes - 1)
                            setKind(null)
                        }
                        break;
        
                    case oppositeBtnKind: // and clicked opposite btn as in db
                        props.updateLike(like) // SWITCH their like kind
                        if (oppositeBtnKind == "like") {
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
            } else {    // else CREATE a new like since there is none in db
                props.createLike(like) 
                if (btnKind == "like") {
                    setLikes(likes + 1)
                    setKind("like")
                } else {
                    setDislikes(dislikes + 1)
                    setKind("dislike")
                }
            }
        } else {    // else prompt to login since they're not logged in
            props.history.push('/login')
        }
    }

    return <div id="likes-box">
        <p>{`${video.viewsCount} views • ${props.video.published}`}</p>
        <div className="flex-row">
            <div className={kind ? "border-blue flex-row"
             : "border-grey flex-row"}>
            <button  title="I like this" 
                    onClick={() => handleLike("like")}
                    className={kind === "like" ?
                        "blue" : "grey"}>
                <svg viewBox="0 0 24 24">
                    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path>
                </svg>
                <div>{likes}</div>
            </button>
            <button title="I dislike this" 
                    onClick={() => handleLike("dislike")}
                    className={kind === "dislike" ?
                        "blue" : "grey"}>
                <svg viewBox="0 0 24 24">
                    <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path>
                </svg>
                <div>{dislikes}</div>
            </button></div>
            <a href="https://www.linkedin.com/in/hollyjphillips/"
                target="_blank"
                style={{"textDecoration": "none"}}>
                <button title="Share"
                    className="grey">
                <svg viewBox="0 0 24 24" className="grey">
                    <path d="M14 9V3L22 12L14 21V15C8.44 15 4.78 17.03 2 21C3.11 15.33 6.22 10.13 14 9Z"></path>
                </svg>
                <div>{`SHARE`}</div>
            </button></a>
            <a href="https://www.linkedin.com/in/hollyjphillips/"
                target="_blank"
                style={{"textDecoration": "none"}}>
                <button title="Save" className="grey">
                <svg viewBox="0 0 24 24" className="grey">
                    <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"></path>
                </svg>
                <div>{`SAVE`}</div>
            </button></a>
        </div>
    </div>

}

export default LikeButtons;