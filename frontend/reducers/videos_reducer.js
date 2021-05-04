import {
    RECEIVE_VIDEO,
    RECEIVE_ALL_VIDEOS,
} from '../actions/video_actions';
import {
    RECEIVE_LIKE
} from '../actions/like_actions';
import {
    RECEIVE_COMMENT
} from '../actions/comment_actions';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return action.videos;

        case RECEIVE_VIDEO:
            const video = Object.assign({}, action.video)
            delete video.comments
            return Object.assign({}, state, { [action.video.id]: video });

        case RECEIVE_LIKE:
            newState[action.like.likeable_id].like = action.like;
            return newState;

        default:
            return state;
    }
}

export default videosReducer;