import * as SubscribeAPIUtil from '../util/subscribe_util'

export const RECEIVE_SUBSCRIBE = "RECEIVE_SUBSCRIBE";
export const DELETE_SUBSCRIBE = "DELETE_SUBSCRIBE";

const receiveSubscribe = (subscribe) => {
    return {
        type: RECEIVE_SUBSCRIBE,
        subscribe
    }
}

const removeSubscribe = (subscribe) => {
    return {
        type: DELETE_SUBSCRIBE,
        subscribe
    }
}

export const createSubscribe = (subscribe) => (dispatch) => {
    return (
        SubscribeAPIUtil.createSubscribe(subscribe)
            .then(
                (subscribe) => dispatch(receiveSubscribe(subscribe)),
                (errors) => console.log(errors.responseText)
            )
    )
}

export const deleteSubscribe = (subscribe) => (dispatch) => {
    return (
        SubscribeAPIUtil.deleteSubscribe(subscribe)
            .then(
                (subscribe) => dispatch(removeSubscribe(subscribe)),
                (errors) => console.log(errors.responseText)
            )
    )
}