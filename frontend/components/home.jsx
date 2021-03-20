import React from 'react';
import VideoIndexContainer from './videos/video_index_container';
import LeftNav from "./leftnav";

export default () => {
    return <div className="main-content">
        <LeftNav />
        <div className="splash-banner"></div>
        <div className="splash-gradient"></div>
        <div className="banner">
            <span>Discover your content</span>
        </div>
        <VideoIndexContainer />
    </div>
}