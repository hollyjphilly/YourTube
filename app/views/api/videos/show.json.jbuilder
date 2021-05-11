puts "-------------JSON JBUILDER----------------"
json.extract! @video, :id, :title, :description, :uploader_id
json.published @video.created_at.strftime("%b %d, %Y")
json.movieURL url_for(@video.moviefile)
json.thumbURL url_for(@video.thumbnail)
json.user do
    json.extract! @video.user, :id, :username, :profile_image_url
    json.subscribers @video.user.subscribers.length
end
json.date time_ago_in_words(@video.created_at) + " ago"
like = @video.likes.select { |like| like.liker_id == @userId }
json.like like[0]
json.likesCount @video.likes.select { |like| like.kind == "like" }.length
json.dislikesCount @video.likes.select { |like| like.kind == "dislike" }.length
json.viewsCount @video.views.length

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