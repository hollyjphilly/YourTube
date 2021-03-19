import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../actions/video_actions';
import { withRouter } from 'react-router-dom';

const mSTP = ({ entities }, rProps) => {
    return {
        video: entities.videos[rProps.match.params.videoId]
    }
}

const mDTP = (dispatch) => {
    return {
        fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
    }
}

export default withRouter(connect(mSTP, mDTP)(VideoShow));