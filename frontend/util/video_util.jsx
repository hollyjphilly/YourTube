export const fetchVideo = (videoId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}`,
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