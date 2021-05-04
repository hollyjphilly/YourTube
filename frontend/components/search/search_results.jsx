import React, { useState, useEffect } from 'react';
import VideoIndexContainer from '../videos/video_index_container';
import LeftNav from "../leftnav";
import MastheadContainer from "../masthead/masthead_container";

function SearchResults(props) {
    const query = props.location.search.split("=")[1]
    document.title = `YourTube Search - ${query}`

    const [ready, setReady] = useState(false)

    useEffect(() => {
        props.searchVideos(query)
    }, [])

    useEffect(() => {
        setReady(true)
    }, [props.videos])

    if (ready) {
    return <div className="feed-content">
        <MastheadContainer />
        <LeftNav />
        <h2 className="feed">Search Results</h2>
        <VideoIndexContainer searching={true}/>
    </div>
    } else {
        return <div className="feed-content">
        <MastheadContainer />
        <LeftNav />
        <h2 className="feed">Search Results</h2>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    }
}

export default SearchResults;