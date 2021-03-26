import React from 'react';
import VideoIndexContainer from '../videos/video_index_container';
import LeftNav from "../leftnav";
import MastheadContainer from "../masthead/masthead_container";
import { Redirect } from 'react-router';

class Feed extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="feed-content">
        <MastheadContainer />
        <LeftNav />
        <h2 className="feed">{this.props.match.path.split("/")[2]}</h2>
        <VideoIndexContainer />
    </div>
    }
}

export default Feed;