import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.watchVideo = this.watchVideo.bind(this);
        this.reffered = React.createRef();
        this.togglePlay = this.togglePlay.bind(this);
        this.togglePause = this.togglePause.bind(this);
    }
    
    watchVideo(e) {
        this.props.history.replace(`/watch/${this.props.video.id}`)
    }

    togglePlay(e) {
        this.reffered.current.play();
    }

    togglePause (e) {
        this.reffered.current.currentTime = 0;
        this.reffered.current.pause();
    }

    render() {
        const { video } = this.props;
        if (video) {
            return (
            <div className="video-index-item">
                <img onClick={this.watchVideo} className="vii-img" 
                    src={video.thumbURL ? video.thumbURL : window.defaultThumbnail} />
                <div className="vii-display">
                    {!video.user.profile_image_url ? <FontAwesomeIcon 
                        className="vii-no-user-icon"
                        icon={['fa', 'user-circle']} />
                    : <img className="user-icon-bigger"
                            src={video.user.profile_image_url}/>}
                <div className="vii-info">
                        <h3 onClick={this.watchVideo}>{video.title}</h3>
                        <p>{video.user.username}</p>
                        <p>{`${video.viewsCount} views • ${video.date}`}</p>
                    </div>
                {video.user.id === this.props.currentUserId ? <div id="trash-grow">
                    <div id="trash" onClick={() => this.props.deleteVideo(video.id)}><svg viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
                    </path></svg></div></div> : ""}
                </div>
            </div>
            )
        }}
    
}

export default withRouter(VideoIndexItem);