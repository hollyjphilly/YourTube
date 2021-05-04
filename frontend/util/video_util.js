export const fetchVideo = (videoId, userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}`,
        data: {userId}
    })
}

export const fetchVideos = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos`,
    })
}

export const postVideo = (formData) => {
    return $.ajax({
        method: 'POST',
        url: `/api/videos`,
        data: formData,
        contentType: false,
        processData: false,
    })
}