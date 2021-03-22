import React from "react";
import MastheadContainer from "./masthead/masthead_container";
import ModalContainer from "./upload_modal/modal_container";
import { Route, Switch } from 'react-router-dom';
import VideoShowContainer from './videos/video_show_container'
import Home from "./home"

function Main() {
    return (
    <>
        <MastheadContainer />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/watch/:videoId" component={VideoShowContainer} />
            <Route exact path="/upload" component={ModalContainer} />
        </Switch>
    </>
    )
}

export default Main;