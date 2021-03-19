import React from 'react';
import VideoPlayer from './video_player'

class VideoShow extends React.Component {
    componentDidMount() {
        debugger
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        const { video } = this.props;
        if (!video) return <div></div>;
        return (
            <div className="video-show">
                <VideoPlayer URL={video.movieURL}/>
                <h1>{video.title}</h1>
                <p>{video.description}</p>
                
            </div>
        );
    }
}

export default VideoShow;