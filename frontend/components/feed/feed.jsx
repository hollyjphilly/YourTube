import React from 'react';
import VideoIndexContainer from '../videos/video_index_container';
import LeftNav from "../leftnav";
import MastheadContainer from "../masthead/masthead_container";

function Feed(props) {
    const sectionHeader = props.match.path.split("/")[2]

    return <div className="feed-content">
        <MastheadContainer />
        <LeftNav />
        <h2 className="feed">{sectionHeader}</h2>
        <VideoIndexContainer section={sectionHeader}/>
    </div>
}

export default Feed;