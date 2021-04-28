import * as VideoAPIUtil from '../util/video_util'

export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = "RECEIVE_VIDEO_ERRORS";
export const CLEAR_VIDEO_ERRORS = "CLEAR_VIDEO_ERRORS";

const receiveVideo = (video) => {
    return {
        type: RECEIVE_VIDEO,
        video
    }
}

const receiveAllVideos = (videos) => {
    return {
        type: RECEIVE_ALL_VIDEOS,
        videos
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_VIDEO_ERRORS,
        errors
    }
}

export const clearErrors = () => {
    return {
        type: CLEAR_VIDEO_ERRORS,
    }
}

export const fetchVideo = (videoId) => (dispatch) => {
    return (
        VideoAPIUtil.fetchVideo(videoId)
            .then(
                (video) => dispatch(receiveVideo(video))
            )
    )
}

export const fetchVideos = () => (dispatch) => {
    return (
        VideoAPIUtil.fetchVideos()
            .then(
                (videos) => dispatch(receiveAllVideos(videos)),
                errors => {console.log(errors.responseText)}
            )
    )
}

export const postVideo = (formData) => (dispatch) => {
    return (
        VideoAPIUtil.postVideo(formData)
            .then(
                (video) => dispatch(receiveVideo(video)),
                (errors) => dispatch(receiveErrors(errors.responseJSON))
            )
    )
}