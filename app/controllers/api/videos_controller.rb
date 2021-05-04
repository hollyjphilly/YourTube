class Api::VideosController < ApplicationController

    def show
        @video = Video.includes(:user, :comments, :likes).find_by(id: params[:id])
        @userId = params[:userId].to_i
    end

    def index
        if params[:query]
            @videos = Video.where('lower(title) like ?',
                                  "%#{params[:query].downcase}%").includes(:user)
        else
            @videos = Video.all.includes(:user)
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
