class Api::VideosController < ApplicationController

    def show
        @video = Video.all.includes(:user, :comments).find_by(id: params[:id])
    end

    def index
        @videos = Video.all.includes(:user)
    end
    
    def create
        @video = Video.new(video_params)
        
        if @video.save
            render :show
        else
            render json: ["you done effed up mah dude"], status: :unauthorized
        end
    end

    def video_params
        params.require(:video).permit(  :title,
                                        :description,
                                        :uploader_id,
                                        :file
                                    )
    end

end
