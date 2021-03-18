import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SigninButton(props) {
    return <NavLink to="/login" id="sign-in-text">
        <button className="signin" >
            <FontAwesomeIcon className="no-user-icon" icon={['fa', 'user-circle']} />
            <p >SIGN IN</p>
        </button>
    </NavLink>
}

export default SigninButton;