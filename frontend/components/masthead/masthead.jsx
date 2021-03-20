import React from 'react';
import SearchBarContainer from "./search_bar_container";
import SigninButton from "./signin_button";
import UserIconButtonContainer from "./user_icon_button_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalContainer from "../upload_modal/modal_container";

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
                    <a href="/"><img
                        className="logo-image"
                        src={window.logoURL} /></a>
                </div>
                <SearchBarContainer />
                <div id="right-masthead">
                    <ModalContainer />
                    <a href="https://github.com/hollyjphilly">
                        <FontAwesomeIcon
                            className="icon"
                            icon={['fab', 'github']}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/hollyjphillips/">
                        <FontAwesomeIcon
                            className="icon"
                            icon={['fab', 'linkedin']}
                        />
                    </a>
                    {currentUser ? <UserIconButtonContainer /> : <SigninButton /> }
                </div>
            </div>
        )
    }
}

export default Masthead;