import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../actions/video_actions';
import { createLike,
         updateLike,
        deleteLike } from '../../actions/like_actions';

const mSTP = ({ entities, session }, rProps) => {
    return {
        video: entities.videos[rProps.match.params.videoId],
        userId: session.id,
    }
}

const mDTP = (dispatch) => {
    return {
        fetchVideo: (videoId, userId) => dispatch(fetchVideo(videoId, userId)),
        createLike: (like, userId) => dispatch(createLike(like)),
        updateLike: (like) => dispatch(updateLike(like)),
        deleteLike: (like) => dispatch(deleteLike(like))
    }
}

export default connect(mSTP, mDTP)(VideoShow);