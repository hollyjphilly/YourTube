class Api::VideosController < ApplicationController

    def show
        puts "\n------------------VIDEO CONTROLLER #SHOW-----------------------"
        if params[:userId] == ""
            View.create!(video_id: params[:id])
        else
            @userId = params[:userId].to_i
            View.create!(viewer_id: @userId, video_id: params[:id])
        end
        @video = Video.includes(
                                    :likes, 
                                    :views,
                                    thumbnail_attachment: [:blob], 
                                    moviefile_attachment: [:blob], 
                                    comments: [:commenter, :likes], 
                                    user: [:subscribers]
                                    
                                ).find_by(id: params[:id])
    end
    
    def index
        puts "\n------------------VIDEO CONTROLLER #INDEX-----------------------"
        @userId = current_user.id if current_user
        if params[:query]
            @videos = Video.where('lower(title) like ?',
                                  "%#{params[:query].downcase}%").includes(:user, :likes, thumbnail_attachment: [:blob], moviefile_attachment: [:blob])
        else
            @videos = Video.all.includes(:user, :likes, thumbnail_attachment: [:blob], moviefile_attachment: [:blob])
        end
    end
    
    def create
        @video = Video.new(video_params)
        
        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: :unprocessable_entity
        end
    end

    def video_params
        params.require(:video).permit(  :title,
                                        :description,
                                        :uploader_id,
                                        :moviefile
                                    )
    end

end
