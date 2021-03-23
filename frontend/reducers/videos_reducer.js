import {
    RECEIVE_VIDEO,
    RECEIVE_ALL_VIDEOS,
} from '../actions/video_actions';

const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            // debugger
            return action.videos;

        case RECEIVE_VIDEO:
            // debugger
            return Object.assign({}, state, { [action.video.id]: action.video })

        default:
            return state;
    }
}

export default videosReducer;