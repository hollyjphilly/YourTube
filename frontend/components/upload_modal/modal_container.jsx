import { connect } from 'react-redux';
import Modal from './modal';
import { withRouter } from 'react-router-dom';
import { postVideo, clearErrors } from '../../actions/video_actions';

const mSTP = (state, rProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.videos,
    }
}

const mDTP = dispatch => {
    return {
        postVideo: (formData) => dispatch(postVideo(formData)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default withRouter(connect(mSTP, mDTP)(Modal));