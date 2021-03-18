import React from 'react';
import SearchBarContainer from "./search_bar_container";
import SigninButton from "./signin_button";
import UserIconButtonContainer from "./user_icon_button_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Masthead extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout } = this.props;
        return (
            <div id="masthead">
                <div id="left-masthead">
                    <FontAwesomeIcon className="hamburger" icon={['fa', 'bars']} />
                    <img
                        className="logo-image"
                        src={window.logoURL} />
                </div>
                <SearchBarContainer />
                <div id="right-masthead">
                    <FontAwesomeIcon className="icon" icon={['fa', 'video']} />
                    <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
                    <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} />
                    {currentUser ? <UserIconButtonContainer /> : <SigninButton /> }
                </div>
            </div>
        )
    }
}

export default Masthead;