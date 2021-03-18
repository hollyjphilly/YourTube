import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UserIconButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
        };
        this.toggle = this.toggle.bind(this);
        this.display = this.display.bind(this);
    }

    toggle() {
        debugger
        this.setState({
            hidden: !this.state.hidden
        })
    }

    display(logout, currentUser) {
        return <div className="user-icon-dropdown-content">
                <div className="user-display">
                    <img
                        className="user-icon-bigger"
                        src={currentUser.profile_image_url}>
                    </img>
                    <div className="user-info">
                        <h3>{currentUser.first_name + " " + currentUser.last_name}</h3>
                        <p>{currentUser.email}</p>
                        <a><p>Manage your Joojle Account</p></a>
                    </div>
                </div>
                <div className="user-icon-dropdown-content-links" onClick={logout}>
                    <FontAwesomeIcon className="hamburger link-icon" icon={['fa', 'external-link-alt']} />
                    <p>Sign out</p>
                </div>
            </div>
    }

    render() {
        debugger
        const { logout, currentUser } = this.props;
        return <button className="user-icon-container"> 
            <div className="user-icon-dropdown" onClick={this.toggle}>
                <img
                    className="user-icon"
                    src={currentUser.profile_image_url}>
                </img>
                {!this.state.hidden ? this.display(logout, currentUser) : ""}
            </div>
        </button>
    }
}

export default UserIconButton;