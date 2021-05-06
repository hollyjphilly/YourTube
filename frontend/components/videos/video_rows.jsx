import React, { useEffect } from 'react';
import VideoRowsItem from './video_rows_item'

function VideoRows(props) {
    const { videos, searching } = props;

    useEffect(() => {
        if (!searching) props.fetchVideos()
    }, [])

    if (videos) {
        return (
            <div id="left-nav-margin">
                    {videos.map(video => (
                        <VideoRowsItem
                        key={video.id}
                        video={video}/>
                    ))}
            </div>
        );  
    }
}

export default VideoRows;