export const createAccountAJAX = (user) => {
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: {user}
    })
}

export const removeAccountAJAX = (userId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/users/${userId}`,
    })
}

export const editAccountAJAX = (user) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        data: { user }
    })
}

export const loginAJAX = (user) => {
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: {user}
    })
}

export const logoutAJAX = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session',
    })
}

