import React from 'react';
import SidebarItem from './sidebar_item'

function Sidebar(props) {
    
    if (Object.keys(props.videos).length <= 1) {
        props.fetchVideos()
    }

    return <div id="sidebar">
        {props.videos.map(video => (
            <SidebarItem
                key={video.id}
                video={video}/>
        ))}
    </div>
}

export default Sidebar;