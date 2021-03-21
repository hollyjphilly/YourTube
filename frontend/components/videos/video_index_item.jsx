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
        this.props.history.push(`/watch/${this.props.video.id}`)
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
                <video ref={this.reffered}
                    className="vii-img"
                    src={video.movieURL}
                    onClick={this.watchVideo}
                    onMouseEnter={this.togglePlay}
                    onMouseLeave={this.togglePause}
                    muted={true}
                    loop={true}/>
                <div className="vii-display">
                    {!video.user.profile_image_url ? <FontAwesomeIcon 
                        className="vii-no-user-icon"
                        icon={['fa', 'user-circle']} />
                    : <img className="user-icon-bigger"
                            src={video.user.profile_image_url}/>}
                <div className="vii-info">
                        <h3 onClick={this.watchVideo}>{video.title}</h3>
                        <p>{video.user.username}</p>
                    </div>
                </div>
            </div>
            )
        }}
    
}

export default withRouter(VideoIndexItem);