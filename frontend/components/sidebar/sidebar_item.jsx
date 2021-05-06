import React from 'react';
import { withRouter } from 'react-router';

function SidebarItem(props) {
    const { video } = props;

    function visit() {
        props.history.push(`/watch/${video.id}`)
    }

    return <div className="sidebar-item" onClick={visit}>
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

export default withRouter(SidebarItem);