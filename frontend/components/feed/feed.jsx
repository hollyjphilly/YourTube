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
        const {currentUser} = this.props;
        return <div className="feed-content">
        {!currentUser ? <Redirect to="/login"/> : ""}
        <MastheadContainer />
        <LeftNav />
        <h2 className="feed">Feed</h2>
        <VideoIndexContainer />
    </div>
    }
}

export default Feed;