import React from 'react';

function SidebarItem(props) {
    const { video } = props;
    return <div className="sidebar-item">
        <div className="sidebar-thumbnail">
            <img src={video.thumbURL} alt={`${video.title} thumbnail`}></img>
        </div>
        <div className="sidebar-details">
            <h3>{video.title}</h3>
            <p>{video.user.username}</p>
            <p>{`50 views • ${video.date}`}</p>
        </div>
    </div>
}

export default SidebarItem;