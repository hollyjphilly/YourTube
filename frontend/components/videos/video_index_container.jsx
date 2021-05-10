import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({ entities, session }, rProps) => {
    const subscriptions  = ((entities.users && session.id) ? entities.users[session.id].subscriptions 
    : [])
    return {
        videos: Object.values(entities.videos),
        subs: subscriptions,
        userId: session.id
    }
}

const mDTP = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos())
    }
}

export default withRouter(connect(mSTP, mDTP)(VideoIndex));