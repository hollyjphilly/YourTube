import React from 'react';

function UserIconButton({ logout, currentUser }) {
    return <button className="user-icon-container" onClick={logout}>
        <img
            className="user-icon"
            src={currentUser.profile_image_url}>
            </img>
    </button>
}

export default UserIconButton;