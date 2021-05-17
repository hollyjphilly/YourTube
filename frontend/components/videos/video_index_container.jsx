import { connect } from 'react-redux';
import VideoIndex from './video_index';
import { fetchVideos, deleteVideo } from '../../actions/video_actions';
import { fetchUsers } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({ entities, session }, rProps) => {
    const subscriptions  = ((entities.users && session.id) ? entities.users[session.id].subscriptions 
    : [])
    return {
        videos: Object.values(entities.videos),
        subs: subscriptions,
        userId: session.id,
        users: entities.users
    }
}

const mDTP = (dispatch) => {
    return {
        fetchVideos: () => dispatch(fetchVideos()),
        fetchUsers: (subs) => dispatch(fetchUsers(subs)),
        deleteVideo: (videoId) => dispatch(deleteVideo(videoId))
    }
}

export default withRouter(connect(mSTP, mDTP)(VideoIndex));