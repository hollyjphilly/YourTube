import {
    RECEIVE_COMMENT
} from '../actions/comment_actions';
import {
    RECEIVE_VIDEO,
} from '../actions/video_actions';

const videosReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = [...state]
    switch (action.type) {

        case RECEIVE_VIDEO:
            return action.video.comments

        case RECEIVE_COMMENT:
            newState.unshift(action.comment);
            return newState;

        default:
            return state;
    }
}

export default videosReducer;