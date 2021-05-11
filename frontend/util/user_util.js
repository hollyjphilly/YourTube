export const fetchUsers = (subs) => {
    return $.ajax({
        method: 'GET',
        url: '/api/users',
        data: {subs}
    })
}