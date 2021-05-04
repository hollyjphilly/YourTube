import React, { useEffect } from 'react';
import VideoIndexItem from './video_index_item'

function VideoIndex(props) {
    const { videos, searching } = props;

    useEffect(() => {
        if (!searching) props.fetchVideos()
    }, [])

    if (videos) {
        return (
            <div className="video-index">
                {videos.map(video => (
                    <VideoIndexItem
                    key={video.id}
                    video={video}/>
                ))}
            </div>
        );  
    }
}

export default VideoIndex;