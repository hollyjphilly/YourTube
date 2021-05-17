import React, { useEffect } from 'react';
import VideoIndexItem from './video_index_item'
import UserIndexItem from '../users/user_index_item'

function VideoIndex(props) {
    const { videos, searching, section, userId, 
            subs, users, flip, deleteVideo } = props;

    useEffect(() => {
        if (!searching) props.fetchVideos()
        if (section === "Your Subscriptions") props.fetchUsers(subs)
    }, [])

    if (videos) {
        let filteredVideos = videos;
        
        if (section === "subscriptions") {
            filteredVideos = videos.filter(video => subs.includes(video.user.id) )
        }

        if (section === "Your Subscriptions") {
            if (Object.values(users).length > 1) {
                return (
                    <div className="user-index">
                        {subs.map(userId => (
                        <UserIndexItem
                        key={userId}
                        user={users[userId]}/>
                    ))}
                    </div>
                )
            }
        }

        if (section === "library") {
            filteredVideos = videos.filter(video => video.user.id === userId )
        }

        if (section === "Liked Videos") {
            filteredVideos = videos.filter(video => video.like ? true : false)
        }        

        if (section === "explore") {
            filteredVideos = videos.sort(function(a, b){return b.viewsCount - a.viewsCount});
        }

        if (filteredVideos.length === 0) {
            return <p className="scoot-text">No videos to show.</p>
        }
        
        return (
            <div className={`video-index ${flip ? "kill-margin" : ""}`}>
                {filteredVideos.map(video => (
                    <VideoIndexItem
                    key={video.id}
                    video={video}
                    deleteVideo={deleteVideo}
                    currentUserId={userId}
                    showTrash={section === "library"}/>
                ))}
            </div>
        );  
    }
}

export default VideoIndex;