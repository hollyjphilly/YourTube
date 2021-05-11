import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function UserIndexItem(props) {
    const { user } = props;

    if (user) {
    return <div className="sub-user">
            {user.profile_image_url ? <img
                className="user-icon-biggest"
                src={user.profile_image_url}>
            </img> : <FontAwesomeIcon
                    className="vii-no-user-icon-biggest"
                icon={['fa', 'user-circle']}
            />}
        <div className="sub-user-details">
            <h3>{user.username}</h3>
            <p></p>
            <p>{`${user.subscribers} subscriber${user.subscribers === 1 ? "" : "s"}`}</p>
        </div>
    </div>
    }
}

export default UserIndexItem;