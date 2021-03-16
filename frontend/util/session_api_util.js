export const createAccount = (user) => {
    
    return $.ajax({
        method: 'POST',
        url: '/api/users',
        data: {user}
    })
}

export const removeAccount = (userId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/users/${userId}`,
    })
}

export const editAccount = (user) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/users/${user.id}`,
        data: { user }
    })
}

export const login = (user) => {
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: {user}
    })
}

export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session',
    })
}

