import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo,
         fetchVideos } from '../../actions/video_actions';
import { createLike,
         updateLike,
        deleteLike } from '../../actions/like_actions';
import { createSubscribe,
        deleteSubscribe } from '../../actions/subscribe_actions';

const mSTP = ({ entities, session }, rProps) => {
    
    const subscriptions  = ((entities.users && session.id) ? entities.users[session.id].subscriptions 
    : [])
    return {
        videos: entities.videos,
        video: entities.videos[rProps.match.params.videoId],
        subs: subscriptions,
        userId: session.id,
    }
}

const mDTP = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        fetchVideo: (videoId, userId) => dispatch(fetchVideo(videoId, userId)),
        createLike: (like, userId) => dispatch(createLike(like)),
        updateLike: (like) => dispatch(updateLike(like)),
        deleteLike: (like) => dispatch(deleteLike(like)),
        createSubscribe: (sub) => dispatch(createSubscribe(sub)),
        deleteSubscribe: (sub) => dispatch(deleteSubscribe(sub))
    }
}

export default connect(mSTP, mDTP)(VideoShow);