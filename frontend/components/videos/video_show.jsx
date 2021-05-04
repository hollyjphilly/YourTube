import React, { useEffect, useState } from 'react';
import VideoPlayer from './video_player';
import CommentIndexContainer from '../comments/comment_index_container'
// import CommentIndex from '../comments/comment_index'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MastheadContainer from "../masthead/masthead_container";
import LikeButtons from "./video_like_buttons"
import CommentForm from "../comments/comment_form_container"

function VideoShow(props) {
    const { video } = props;

    useEffect(() => {
        props.fetchVideo(props.match.params.videoId, props.userId).then(
           (res) => {
               document.title = `${res.video.title} - YourTube`
            }
        )
        return () => {
            document.title = "YourTube";
        }
    }, [])

    if (video) {
        return (
        <><MastheadContainer />
        <div className="video-show">
            
            {/* <VideoPlayer URL={video.movieURL} id={video.id} /> */}
            <VideoPlayer URL="https://drive.google.com/uc?export=download&id=1yTv0ET1Gd5ljA31T95CD895lc9mzz4ld" id={video.id} />

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
                        <p>222K subscribers</p>
                    </div>
                </div>

                <button className="sub-btn">SUBSCRIBE</button>

            </div>

            <p className="video-description">{video.description}</p>
            <CommentForm />
            <CommentIndexContainer />

            </div></>
        );
    } else {
        return null
    }
        
}


export default VideoShow;