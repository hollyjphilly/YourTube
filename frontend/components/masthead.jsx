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
                <FontAwesomeIcon icon={['fa', 'user-check']} />
            </button>
        } else {
            return <button id='signin-btn' onClick={()=>this.toSignin}>
                <FontAwesomeIcon icon={['fa', 'user-circle']} />SIGN IN
            </button>
        }
    }

    render() {
        return (
            <div id="masthead">
                <div id="left-masthead">
                    <FontAwesomeIcon icon={['fa', 'bars']} />
                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                    <p>YourTube</p>
                </div>
                <FontAwesomeIcon icon={['fa', 'search']} />
                <div id="right-masthead">
                    <FontAwesomeIcon icon={['fa', 'video']} />
                    <FontAwesomeIcon icon={['fab', 'github']} />
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    {this.signinButton()}
                </div>
            </div>
        )
    }
}

export default Masthead;