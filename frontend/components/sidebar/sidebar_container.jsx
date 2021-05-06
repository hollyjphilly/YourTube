import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { withRouter } from 'react-router-dom';
import { fetchVideos } from '../../actions/video_actions';

const mSTP = ({ entities }, rProps) => {
    return {
        videos: Object.values(entities.videos)
    }
}

export default withRouter(connect(mSTP)(Sidebar));