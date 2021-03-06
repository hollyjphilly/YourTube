class Api::UsersController < ApplicationController

    def index
        @users = User.where(id: params[:subs])
    end

    def create
        @user = User.new(user_params)
        
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: :unauthorized
        end
    end

    def user_params
        params.require(:user).permit(   :username, 
                                        :password,
                                        :email,
                                        :first_name,
                                        :last_name,
                                        :profile_image_url,
                                        :channel_image_url
                                    )
    end

end
