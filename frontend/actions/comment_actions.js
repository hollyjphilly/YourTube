import * as CommentAPIUtil from '../util/comment_util'

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment
    }
}

export const createComment = (comment) => (dispatch) => {
    return (
        CommentAPIUtil.createComment(comment)
            .then(
                (comment) => dispatch(receiveComment(comment)),
                (errors) => console.log(errors.responseText)
            )
    )
}

export const updateComment = (comment) => (dispatch) => {
    return (
        CommentAPIUtil.updateComment(comment)
            .then(
                (comment) => dispatch(receiveComment(comment)),
                (errors) => console.log(errors.responseText)
            )
    )
}

export const deleteComment = (comment) => (dispatch) => {
    return (
        CommentAPIUtil.deleteComment(comment)
            .then(
                (comment) => dispatch(receiveComment(comment)),
                (errors) => console.log(errors.responseText)
            )
    )
}