import React from 'react';
import VideoPlayer from './video_player';
import CommentIndex from '../comments/comment_index'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class VideoShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        const { video, videoIds } = this.props;
        if (video) {
            return (
            <div className="video-show">

                <VideoPlayer URL={video.movieURL} id={video.id} />

                <div className="video-info">
                    <h1>{video.title}</h1>
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

                <CommentIndex comments={video.comments} commenters={video.commenters}/>

                </div>
            );
        } else {
            return null
        }
        
    }
}

export default VideoShow;