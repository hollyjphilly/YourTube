import * as UserAPIUtil from '../util/user_util'

export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const fetchUsers = (subs) => (dispatch) => {
    return (
        UserAPIUtil.fetchUsers(subs)
            .then(
                (users) => dispatch(receiveUsers(users)),
                errors => {console.log(errors.responseText)}
            )
    )
}