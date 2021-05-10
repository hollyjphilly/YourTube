class Api::VideosController < ApplicationController

    def show
        puts "\n------------------VIDEO CONTROLLER #SHOW-----------------------"
        @video = Video.includes(
                                    :likes, 
                                    thumbnail_attachment: [:blob], 
                                    moviefile_attachment: [:blob], 
                                    comments: [:commenter, :likes], 
                                    user: [:subscribers]
                                    
                                ).find_by(id: params[:id])

        @userId = params[:userId].to_i
    end
    
    def index
        puts "\n------------------VIDEO CONTROLLER #INDEX-----------------------"
        if params[:query]
            @videos = Video.where('lower(title) like ?',
                                  "%#{params[:query].downcase}%").includes(:user, thumbnail_attachment: [:blob], moviefile_attachment: [:blob])
        else
            @videos = Video.all.includes(:user, thumbnail_attachment: [:blob], moviefile_attachment: [:blob])
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
