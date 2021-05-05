@videos.each do |video|
     json.set! video.id do   
        json.extract! video, :id, :title
        json.movieURL url_for(video.moviefile)
        json.thumbURL url_for(video.thumbnail)
        json.user do
                json.extract! video.user, :id, :username, :profile_image_url
        end
        json.date time_ago_in_words(video.created_at) + " ago"
     end
end