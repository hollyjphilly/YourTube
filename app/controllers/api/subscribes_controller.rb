class Api::SubscribesController < ApplicationController
    
    def create
        @subscribe = Subscribe.new(subscriber_id: subscribe_params[:subscriber_id].to_i,
            subscribee_id: subscribe_params[:subscribee_id].to_i)
        
        if @subscribe.save
            render :show
        else
            render json: @subscribe.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @subscribe = Subscribe.find_by(subscriber_id: subscribe_params[:subscriber_id].to_i,
            subscribee_id: subscribe_params[:subscribee_id].to_i)

        if @subscribe.destroy
            render json: @subscribe
        else
            render json: @subscribe.errors.full_messages, status: :unprocessable_entity
        end
    
    end

    def subscribe_params
        params.require(:subscribe).permit( :subscriber_id, :subscribee_id )
    end

end