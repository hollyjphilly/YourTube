json.extract! @video, :id, :title, :description, :uploader_id
json.published @video.created_at.strftime("%b %d, %Y")
json.movieURL url_for(@video.moviefile)
json.user do
    json.extract! @video.user, :id, :username, :profile_image_url
end

like = @video.likes.select { |like| like.liker_id == @userId }
json.like like[0]
json.likesCount @video.likes.select { |like| like.kind == "like" }.length
json.dislikesCount @video.likes.select { |like| like.kind == "dislike" }.length

if @video.comments
    json.comments @video.comments do |comment|
            json.id comment.id
            json.body comment.body
            json.date time_ago_in_words(comment.created_at) + " ago"
            json.commenter do
                json.extract! comment.commenter, 
                    :id, :username, :profile_image_url
            end
            like = comment.likes.select { |like| like.liker_id == @userId }
            json.like like[0]
            json.likesCount comment.likes.select { |like| like.kind == "like" }.length
            json.dislikesCount comment.likes.select { |like| like.kind == "dislike" }.length
    end
end