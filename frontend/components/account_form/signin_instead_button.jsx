import React from 'react';
import { NavLink } from 'react-router-dom';

function signinInsteadButton () {
    return (
        <NavLink to="/login" className="form-alt-submit">
            Sign in instead
        </NavLink>
    )
}

export default signinInsteadButton;