import {
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import {
    DELETE_SUBSCRIBE,
    RECEIVE_SUBSCRIBE
} from '../actions/subscribe_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user })
            
        case RECEIVE_SUBSCRIBE:
            newState[action.subscribe.subscriber_id].subscriptions.push(action.subscribe.subscribee_id)
            return newState;

        case DELETE_SUBSCRIBE:
            
            let subs = newState[action.subscribe.subscriber_id].subscriptions
            let newSubs = subs.filter(subId => subId != action.subscribe.subscribee_id);
            newState[action.subscribe.subscriber_id].subscriptions = newSubs
            return newState;
    
        default:
            return state;
    }
}

export default usersReducer;