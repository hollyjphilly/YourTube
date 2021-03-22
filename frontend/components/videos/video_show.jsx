import React from 'react';
import VideoPlayer from './video_player'

class VideoShow extends React.Component {
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        const { video } = this.props;
        if (!video) return <div></div>;
        return (
            <div className="video-show">
                <VideoPlayer URL={video.movieURL} id={video.id}/>
                <div className="video-info">
                    <h1>{video.title}</h1>
                    <p>{video.description}</p>
                </div>
                
            </div>
        );
    }
}

export default VideoShow;