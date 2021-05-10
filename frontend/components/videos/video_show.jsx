import React, { useEffect, useState } from 'react';
import VideoPlayer from './video_player';
import CommentIndexContainer from '../comments/comment_index_container'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MastheadContainer from "../masthead/masthead_container";
import LikeButtons from "./video_like_buttons"
import CommentForm from "../comments/comment_form_container"
import SidebarContainer from "../sidebar/sidebar_container";


function VideoShow(props) {
    const { videos, video, userId, subs } = props;
    const [subscribed, setSubscribed] = useState(null)
    const [subCount, setSubCount] = useState(0)
    
    useEffect(() => {
        if (Object.keys(videos).length <= 1) {
            props.fetchVideos()
        }
        props.fetchVideo(props.match.params.videoId, userId).then(
           (res) => {
               document.title = `${res.video.title} - YourTube`
            }
        )
        return () => {
            document.title = "YourTube";
        }
    }, [])

    useEffect(() => {
        props.fetchVideo(props.match.params.videoId, userId).then(
           (res) => {
               document.title = `${res.video.title} - YourTube`
            }
        )
        return () => {
            document.title = "YourTube";
        }
    }, [props.match.params.videoId])

    useEffect(() => {
        if (video) { 
            setSubscribed(subs.includes(video.user.id))
            setSubCount(video.user.subscribers)
        }
    }, [video, subs])

    function handleSubscribe() {
        if (userId) {
            if (subscribed === true) {
                props.deleteSubscribe({ subscriber_id: userId, subscribee_id: video.user.id })
                setSubscribed(false)
                setSubCount(subCount - 1)
            } else {
                if(subscribed === false) {
                    props.createSubscribe({ subscriber_id: userId, subscribee_id: video.user.id })
                    setSubscribed(true)
                    setSubCount(subCount + 1)
                }
            }
        } else {
            props.history.push('/login')
        }
    }

    if (video) {
        
        return (<>
        <MastheadContainer />
        <div className="center">
        <div className="flex-row ninety-five">
        <div className="video-show">
            
            <VideoPlayer URL={video.movieURL} id={video.id} />

            <div id="video-info">
                <h1>{video.title}</h1>
                <LikeButtons {...props}  />
            </div>

            <div className="uploader-display">

                <div className="flex-row">
                    {!video.user.profile_image_url ? 
                    <FontAwesomeIcon
                        className="vii-no-user-icon"
                        icon={['fa', 'user-circle']} />
                    : <img  className="user-icon-bigger"
                            src={video.user.profile_image_url} />}

                    <div className="uploader-details" id="desc">
                        <h3>{video.user.username}</h3>
                        <p>{`${subCount} subscriber${subCount === 1 ? "" : "s"}`}</p>
                    </div>
                </div>

                {video.user.id === userId ? "" 
                : <button className={subscribed ? "subbed-btn" : "sub-btn"}
                        onClick={handleSubscribe}
                >{ subscribed ? 
                "SUBSCRIBED" : "SUBSCRIBE"}</button>}

            </div>

            <p className="video-description">{video.description}</p>
            <CommentForm />
            <CommentIndexContainer />

            </div>
            <SidebarContainer />
            </div></div>
            </>
        );
    } else {
        return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    }
        
}


export default VideoShow;