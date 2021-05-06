import React from 'react';
import { withRouter } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function VideoRowsItem(props) {
    const { video } = props;

    function visit() {
        props.history.push(`/watch/${video.id}`)
    }

    return <div className="video-rows-item" onClick={visit}>
        <div className="video-rows-thumbnail">
            <img src={video.thumbURL} alt={`${video.title} thumbnail`}></img>
        </div>
        <div className="video-rows-details">
            <h3>{video.title}</h3>
            <p>{`50 views • ${video.date}`}</p>
            <div className="channel-info">
                {!video.user.profile_image_url ? 
                    <FontAwesomeIcon
                        className="vii-no-user-icon"
                        icon={['fa', 'user-circle']} />
                    : <img  className="user-icon-bigger"
                            src={video.user.profile_image_url} />}
                <p>{video.user.username}</p>
            </div>
            <p>{video.description}</p>
        </div>
    </div>
}

export default withRouter(VideoRowsItem);