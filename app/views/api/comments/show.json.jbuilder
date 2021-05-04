json.extract! @comment, :id, :body, :parent_comment_id,  :video_id
json.commenter do
    json.extract! @comment.commenter, 
        :id, :username, :profile_image_url
end
json.date time_ago_in_words(@comment.created_at) + " ago"
json.likesCount @comment.likes.length
json.liked @comment.likes.find_by(liker_id: @userId) ? true : false