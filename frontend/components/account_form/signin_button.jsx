import React from 'react';
import { NavLink } from 'react-router-dom';

function signinButton () {
    return (
        <NavLink to="/login" className="btn">
            <button>Sign in instead</button>
        </NavLink>
    )
}

export default signinButton;