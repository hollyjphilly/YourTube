import React, { useEffect } from 'react';
import VideoIndexItem from './video_index_item'

function VideoIndex(props) {
    const { videos, searching, section, userId, subs } = props;

    useEffect(() => {
        if (!searching) props.fetchVideos()
    }, [])

    if (videos) {
        let filteredVideos = videos;
        
        if (section === "library") {
            filteredVideos = videos.filter(video => video.user.id === userId )
        }

        if (section === "subscriptions") {
            filteredVideos = videos.filter(video => subs.includes(video.user.id) )
        }

        if (section === "Liked Videos") {
            filteredVideos = videos.sort(video => subs.includes(video.user.id) )
        }

        

        if (section === "explore") {
            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
            shuffle(filteredVideos)
        }

        if (filteredVideos.length === 0) {
            return <p className="feed">No videos to show.</p>
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