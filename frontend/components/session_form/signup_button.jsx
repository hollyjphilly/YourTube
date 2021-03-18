import React from 'react';
import { NavLink } from 'react-router-dom';

function signupButton () {
    return (
        <NavLink to="/signup" className="form-alt-submit">
            Create account
        </NavLink>
    )
}

export default signupButton;