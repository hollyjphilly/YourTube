import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';

class Masthead extends React.Component {
    constructor(props) {
        super(props);
    }

    signinButton() {
        if (this.props.currentUser) {
            return <button onClick={this.props.logout} id="signin">
                <FontAwesomeIcon className="icon user" icon={['fa', 'user-check']} />
            </button>
        } else {
            return <NavLink to="/login" className="btn">
                <button id="signin">
                    <FontAwesomeIcon className="icon user" icon={['fa', 'user-circle']} /><p>SIGN IN</p>
                </button>
            </NavLink>
        }
    }

    render() {
        return (
            <div id="masthead">
                <div id="left-masthead">
                    <FontAwesomeIcon className="icon" icon={['fa', 'bars']} />
                    <div id="logo"><FontAwesomeIcon className="icon logo" icon={['fab', 'youtube']} />YourTube</div>
                </div>
                <FontAwesomeIcon className="icon" icon={['fa', 'search']} />
                <div id="right-masthead">
                    <FontAwesomeIcon className="icon" icon={['fa', 'video']} />
                    <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
                    <FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} />
                    {this.signinButton()}
                </div>
            </div>
        )
    }
}

export default Masthead;