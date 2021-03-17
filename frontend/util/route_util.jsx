import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mSTP = (state) => {
    return {
        loggedIn: Boolean(state.session.currentUser)
    }
}

// Way to call AuthRoute
// <AuthRoute path="/" component={} />

const Auth = ({ loggedIn, path, component: Component }) => {
    return (
        <Route
            path={path}
            render={(props) => {
                if (loggedIn) {
                    return <Redirect to="/" />
                } else {
                    return <Component {...props} />
                }
            }}
        />
    )
}

const Protected = ({ loggedIn, path, component: Component }) => {
    return (
        <Route
            path={path}
            render={(props) => {
                if (loggedIn) {
                    return <Component {...props} />
                } else {
                    return <Redirect to="/signup" />
                }
            }}
        />
    )
}

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
