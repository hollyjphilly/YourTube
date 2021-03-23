import { connect } from 'react-redux';
import Modal from './modal';
import { withRouter } from 'react-router-dom';
import { postVideo } from '../../actions/video_actions';

const mSTP = ({ entities, session }, rProps) => {
    return {
        currentUser: entities.users[session.id]
    }
}

const mDTP = dispatch => {
    return {
        postVideo: video => dispatch(postVideo(video))
    }
}

export default withRouter(connect(mSTP, null)(Modal));