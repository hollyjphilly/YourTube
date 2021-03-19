import React from "react";
import MastheadContainer from "./masthead/masthead_container";

import ModalContainer from "./upload_modal/modal_container";
import { Route } from 'react-router-dom';
import VideoShowContainer from './videos/video_show_container'
import VideoIndex from "./videos/video_index"

function Main() {
    return (
    <>
        <MastheadContainer />
        <Route exact path="/" component={VideoIndex} />
        <Route path="/watch/:videoId" component={VideoShowContainer} />
        <Route exact path="/upload" component={ModalContainer} />
    </>
    )
}

export default Main;