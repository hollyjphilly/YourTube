class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login(@user)
            render :show
        else
            render json: ["invalid username or password"], status: :unprocessable_entity
        end
    end

    def destroy
        if current_user
            logout
            render json: {}
        else
            render json: ["no current user"], status: :not_found
        end
    end

end
