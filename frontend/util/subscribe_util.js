export const createSubscribe = (subscribe) => {
    return $.ajax({
        method: 'POST',
        url: `/api/subscribes`,
        data: { subscribe }
    })
}

export const deleteSubscribe = (subscribe) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/subscribes/1`,
        data: { subscribe }
    })
}