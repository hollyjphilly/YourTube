import React, { useRef } from 'react';
import SearchBarContainer from "../search/search_bar_container";
import SigninButton from "./signin_button";
import UserIconButtonContainer from "./user_icon_button_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalContainer from "../upload_modal/modal_container";
import PopupLinks from "../popup-links"

function Masthead(props) {
    const { currentUser, logout } = props;
    const navMenu = useRef(null)
    const blackScreen = useRef(null)
    
    function toggleNav() {
        navMenu.current.classList.toggle('slide-in')
        blackScreen.current.classList.toggle('hide')
    }

    return (
        <div id="masthead">
            <div ref={blackScreen} className="almost-modal hide"></div>
            <div className="left-popup-nav" ref={navMenu}>
                <div id="popup-header">
                    <div className="hamburger-circle"
                        onClick={toggleNav}>
                        <svg viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            focusable="false"
                            className="hamburger">
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z">
                        </path></svg>
                    </div>
                    <a href="/"><img
                        className="logo-image"
                        src={window.logoURL} /></a>
                </div>
                <PopupLinks />
            </div>
            <div id="left-masthead">
                <div className="hamburger-circle"
                     onClick={toggleNav}>
                <svg viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    className="hamburger">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z">
                </path></svg></div>
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




export default Masthead;