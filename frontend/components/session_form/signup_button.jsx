import React from 'react';
import { NavLink } from 'react-router-dom';

function signupButton () {
    return (
        <NavLink to="/signup" className="btn">
            <button>Create account</button>
        </NavLink>
    )
}

export default signupButton;