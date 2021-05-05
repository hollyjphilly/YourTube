json.extract! @comment, :id, :body, :parent_comment_id,  :video_id
json.commenter do
    json.extract! @comment.commenter, 
        :id, :username, :profile_image_url
end
json.date time_ago_in_words(@comment.created_at) + " ago"
like = @comment.likes.select { |like| like.liker_id == @userId }
json.like like[0]
json.likesCount @comment.likes.select { |like| like.kind == "like" }.length
json.dislikesCount @comment.likes.select { |like| like.kind == "dislike" }.length