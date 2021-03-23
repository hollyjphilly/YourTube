@videos.each do |video|
     json.set! video.id do   
        json.extract! video, :id, :title, :description, :uploader_id
        json.movieURL url_for(video.moviefile)
        json.user do
                json.extract! video.user, :id, :username, :profile_image_url
        end
     end
        # json.thumbnailURL url_for(video.thumbnail)
end