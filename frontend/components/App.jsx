import './fontawesome';

import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// Components
import SessionFormContainer from "./session_form/session_form_container";
import CreateAccountFormContainer from "./account_form/create_account_form_container"
import VideoShowContainer from './videos/video_show_container';
import FeedContainer from "./feed/feed_container";
import Home from "./home";

const App = () => {
    return <Switch>
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={CreateAccountFormContainer} />
            <ProtectedRoute path="/feed/subscriptions" component={FeedContainer}/>
            <ProtectedRoute path="/feed/likedvideos" component={FeedContainer}/>
            <Route path="/feed/explore" component={FeedContainer}/>
            <Route exact path="/watch/:videoId" component={VideoShowContainer} />
            <Route exact path="/" component={Home} />
        </Switch>
}

export default App;

