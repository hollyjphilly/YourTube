import React from 'react';
import VideoIndexContainer from '../videos/video_index_container';
import LeftNav from "../leftnav";
import MastheadContainer from "../masthead/masthead_container";

function Feed(props) {
    const section = props.match.path.split("/")[2]
    let sectionHeader;
    let secondHeader = null;

    switch (section) {
        case "explore":
            sectionHeader = "Trending Videos";
            break;

        case "subscriptions":
            sectionHeader = "Latest Videos";
            secondHeader = "Your Subscriptions";
            break;

        case "library":
            sectionHeader = "Your Videos";
            secondHeader = "Liked Videos";
            break;
    
        default:
            break;
    }

    return <div className="feed-content">
        <MastheadContainer />
        <LeftNav />
        <h2 className="feed">{sectionHeader}</h2>
        <VideoIndexContainer section={section} flip={secondHeader ? true : false}/>
        {secondHeader ? <><h2 className="feed">{secondHeader}</h2>
        <VideoIndexContainer section={secondHeader}/></> : ""}
    </div>
}

export default Feed;