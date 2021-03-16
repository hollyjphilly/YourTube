import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Masthead extends React.Component {
    constructor(props) {
        super(props);
        this.toSignin = this.toSignin.bind(this)
    }

    toSignin() {
        this.props.history.push('/signin');
    }

    signinButton() {
        if (this.props.currentUser) {
            return <button id='temp-signout-btn' onClick={this.props.logout}>
                <FontAwesomeIcon className="icon user" icon={['fa', 'user-check']} />
            </button>
        } else {
            return <button id='signin-btn' onClick={()=>this.toSignin}>
                <FontAwesomeIcon className="icon user" icon={['fa', 'user-circle']} /><p>SIGN IN</p>
            </button>
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