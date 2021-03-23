json.extract! @video, :id, :title, :description, :uploader_id
json.movieURL url_for(@video.moviefile)
json.user do
    json.extract! @video.user, :id, :username, :profile_image_url
end
json.comments @video.comments do |comment|
        json.id comment.id
        json.body comment.body
        json.date time_ago_in_words(comment.created_at)[6..-1] + " ago"
        json.commenter do
            json.extract! comment.commenter, :id, :username, :profile_image_url
        end
end