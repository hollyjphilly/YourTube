json.extract! @video, :id, :title, :description, :uploader_id
json.movieURL url_for(@video.moviefile)



