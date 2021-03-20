json.array! @videos do |video|
        json.extract! video, :id, :title, :description, :uploader_id
        json.movieURL url_for(video.moviefile)
        json.user do
                json.extract! video.user, :id, :username, :profile_image_url
        end
        # json.thumbnailURL url_for(video.thumbnail)
end