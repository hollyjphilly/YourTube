import React, { useEffect } from 'react';
import VideoIndexItem from './video_index_item'

function VideoIndex(props) {
    const { videos, searching, section, userId } = props;

    useEffect(() => {
        if (!searching) props.fetchVideos()
    }, [])

    if (videos) {
        let filteredVideos = videos;
        
        if (section === "library") {
            filteredVideos = videos.filter(video => video.user.id === userId )
        }

        return (
            <div className="video-index">
                {filteredVideos.map(video => (
                    <VideoIndexItem
                    key={video.id}
                    video={video}/>
                ))}
            </div>
        );  
    }
}

export default VideoIndex;